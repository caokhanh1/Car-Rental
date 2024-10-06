import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function Google() {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential; // Nhận token từ Google

    try {
      // Gọi API backend để xử lý token Google
      const res = await axios.post("http://localhost:5130/authen/signin-google", {
        token,
      });

      const data = res.data;

      if (data.success) {
        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem("currentUser", JSON.stringify(data.user));

        // Điều hướng người dùng tới trang chính
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
    <div>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
      />
    </div>
  );
}

