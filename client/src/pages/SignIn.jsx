import { Link } from "react-router-dom";
import Google from "../components/Google";
import { useState } from "react";
import axios from "axios"; 
export default function SignIn() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsLoading(true); 

    try {
      // Gửi POST request đến API với await
      const response = await axios.post("/api/signin", formData); 
      console.log("User signed in successfully:", response.data);
    } catch (error) {
      // Xử lý lỗi
      console.error("There was an error signing in:", error);
      setError("Invalid email or password. Please try again."); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="mb-100">
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>

        {error && <p className="text-red-500">{error}</p>} 

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <div className="text-right mt-1">
            <Link
              to="/forgot-password"
              className="text-blue-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            disabled={isLoading} 
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
          <Google />
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
