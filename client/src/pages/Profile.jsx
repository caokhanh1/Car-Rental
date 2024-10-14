import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const fileRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(undefined);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Lấy thông tin người dùng từ localStorage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);


  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await axios.post(
        `http://localhost:5130/user/upload-avatar/${currentUser._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        const updatedUser = { ...currentUser, avatar: data.avatar };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        setFormData({ ...formData, avatar: data.avatar });
      } else {
        setError("Failed to upload avatar");
      }
    } catch (err) {
      setError("Upload failed");
    }
  };

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
      const response = await axios.post(
        `http://localhost:5130/user/update/${currentUser._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (!data.success) {
        setError(data.message);
        setLoading(false);
        return;
      }

      // Cập nhật thông tin người dùng và lưu vào localStorage
      const updatedUser = { ...currentUser, ...formData };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setUpdateSuccess(true);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/sign-in");
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar || "https://via.placeholder.com/150"}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />

        <input
          type="text"
          placeholder="username"
          defaultValue={currentUser.username}
          id="username"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          defaultValue={currentUser.email}
          id="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          defaultValue={currentUser.role}
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="address"
          defaultValue={currentUser.address}
          id="address"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="phone"
          defaultValue={currentUser.phone}
          id="phone"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Update"}
        </button>
        <Link
          className="bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95"
          to={"/register-car"}
        >
          Create Listing
        </Link>
      </form>
      <div className="flex justify-between float-end mt-5">
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Sign out
        </span>
      </div>
      {error && <p className="text-red-700 mt-5">{error}</p>}
      {updateSuccess && <p className="text-green-700 mt-5">User is updated successfully!</p>}
    </div>
  );
}
