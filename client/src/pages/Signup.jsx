import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null); // Để lưu trữ lỗi nếu có
  const [isLoading, setIsLoading] = useState(false); // Để xử lý trạng thái loading

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    setIsLoading(true); // Bắt đầu loading

    try {
      // Gửi POST request đến API .NET
      const response = await axios.post("/api/signup", formData); 

      console.log("User registered successfully:", response.data);
     
    } catch (error) {
      // Xử lý lỗi
      console.error("There was an error registering the user:", error);
      setError("There was an error registering the user. Please try again."); 
    } finally {
      setIsLoading(false); 
    }
  };

  console.log(formData);

  return (
    <div className="p-3 max-w-lg mx-auto mb-100">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          type="text"
          placeholder="address"
          className="border p-3 rounded-lg"
          id="address"
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="phone"
          className="border p-3 rounded-lg"
          id="phone"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          disabled={isLoading} 
        >
          {isLoading ? "Signing up..." : "Sign Up"} 
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
