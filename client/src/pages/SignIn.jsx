import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Label, TextInput } from 'flowbite-react';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin component

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(`http://localhost:5130/Authen/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(data);

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }

      // Lưu user vào localStorage
      localStorage.setItem('currentUser', JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential; 

    try {
        // Gửi token Google lên server để xác thực
        const res = await axios.post("http://localhost:5130/Authen/signin-google", {
            token,  // Send token to backend
        });

        const data = res.data;

        if (data.success) {
            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem("currentUser", JSON.stringify(data.user));
            console.log("success");
            navigate("/");
        } else {
            alert(data.message); // Xử lý thông báo lỗi
        }
    } catch (error) {
        console.error("Google login failed", error);
        alert("Error logging in with Google");
    }
};


  const handleGoogleError = (error) => {
    console.error("Google login error:", error);
    alert("Error logging in with Google");
  };

  return (
    <div className="mb-100">
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        {error && <p className="text-red-500 mt-5">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label value='Your email' />
            <TextInput
              type='email'
              placeholder='name@gmail.com'
              id='email'
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput
              type='password'
              placeholder='**********'
              id='password'
              onChange={handleChange}
            />
          </div>

          <div className="text-right mt-1">
            <Link to="/forgot-password" className="text-blue-700 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>

          {/* Component Google Login */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </form>

        <div className="flex gap-2 mt-5">
          <p>Do not have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-700">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
