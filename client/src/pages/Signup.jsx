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

  return (
    <div className="p-3 max-w-lg mx-auto mb-100">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      {error && <p className="text-red-500 mt-5">{error}</p>}
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
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <div>
          <Label value="Full Name" />
          <TextInput
            type="text"
            placeholder="Full Name"
            id="fullName"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Address" />
          <TextInput
            type="text"
            placeholder="Address"
            id="address"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Phone" />
          <TextInput
            type="tel"
            placeholder="Phone"
            id="phone"
            onChange={handleChange}
          />
        </div>
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Đăng kí"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Bạn đã có tài khoản ?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Đăng nhập</span>
        </Link>
      </div>
    </div>
  );
}
