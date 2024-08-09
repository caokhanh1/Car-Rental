import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
   
    
  }
  console.log(formData);

  return (
    <div className="p-3 max-w-lg mx-auto mb-100">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form onClick={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <input
          type="address"
          placeholder="address"
          className="border p-3 rounded-lg"
          id="address"
          onChange={handleChange}
        />
        <input
          type="phone"
          placeholder="phone"
          className="border p-3 rounded-lg"
          id="phone"
          onChange={handleChange}
        />

        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
