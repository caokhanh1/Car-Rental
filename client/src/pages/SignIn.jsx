import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Label, TextInput } from "flowbite-react";
import { jwtDecode } from "jwt-decode";
import { auth, provider, signInWithPopup } from "../firebaseConfig";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleVerificationChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const sendVerificationCode = async (email) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/auths/generate-verifying-code`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEmailSent(true);
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to send verification code."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/auths/sign-in`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }

      const decoded = jwtDecode(data.token);
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          ...data,
          role: decoded.role,
        })
      );
      setLoading(false);
      if (decoded.role === "Admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.code === "USER_IS_NOT_VERIFIED") {
          await sendVerificationCode(formData.email);
          setIsVerifying(true);
          setLoading(true);
        } else {
          setError(error.response.data.message || error.message);
        }
      } else {
        setError(error.message);
      }
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/auths/verify-code`,
        { email: formData.email, code: verificationCode },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }

      await handleSubmit(e);
    } catch (error) {
      console.error("Verification Error:", error);
      setError(error.response?.data?.message || error.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/auths/sign-in/google`,
        {
          idToken,
        }
      );

      const data = res.data;

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }

      const decoded = jwtDecode(data.token);
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          ...data,
          role: decoded.role,
        })
      );
      setLoading(false);
      if (decoded.role === "Admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Google login error:", error);
      setError(error.response?.data?.message || error.message);
      setLoading(false);
    }
  };

  return (
    <div className="mb-100">
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        {error && <p className="text-red-500 mt-5">{error}</p>}
        {emailSent && (
          <p className="text-green-500 mt-5">
            Verification code has been sent to your email.
          </p>
        )}
        {!isVerifying ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="**********"
                id="password"
                onChange={handleChange}
              />
            </div>

            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-blue-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
            <button
              onClick={handleGoogleLogin}
              className="bg-blue-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              Sign in with Google
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="flex flex-col gap-4">
            <div>
              <Label value="Enter Verification Code" />
              <TextInput
                type="text"
                placeholder="Verification Code"
                value={verificationCode}
                onChange={handleVerificationChange}
              />
            </div>
            <button
              disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Verify"}
            </button>
          </form>
        )}

        {!isVerifying && (
          <div className="flex gap-2 mt-5">
            <p>Do not have an account?</p>
            <Link to="/sign-up">
              <span className="text-blue-700">Sign up</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
