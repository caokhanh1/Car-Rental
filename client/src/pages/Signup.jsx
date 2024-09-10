import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Label, TextInput } from "flowbite-react";
export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        `http://localhost:5130/Authen/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res.data);
      if (res.data.success === false) {
        setError(res.data.message);
      } else {
        navigate("/sign-in", {
          state: {
            startPath: "register",
          },
        });
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(null);
  //   axios({
  //     method: "post",
  //     url: `http://localhost:5130/Authen/register`,
  //     data: formData,
  //   })
  //     .then(() => {
  //       console.log("Đăng ký tài khoản thành công!");
  //       setTimeout(() => {
  //         navigate("/sign-in", {
  //           state: {
  //             startPath: "register",
  //           },
  //         });
  //       }, 1000);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="p-3 max-w-lg mx-auto mb-100">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      {error && <p className="text-red-500 mt-5">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <Label value="Your username" />
          <TextInput
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Your email" />
          <TextInput
            type="email"
            placeholder="name@company.com"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Your password" />
          <TextInput
            type="text"
            placeholder="fullName"
            id="fullName"
            onChange={handleChange}
          />
        </div>

        <div>
          <Label value="Full Name" />
          <TextInput
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Address" />
          <TextInput
            type="text"
            placeholder="address"
            id="address"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Phone" />
          <TextInput
            type="tel"
            placeholder="phone"
            id="phone"
            onChange={handleChange}
          />
        </div>
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
