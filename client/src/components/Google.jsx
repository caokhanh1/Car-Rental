import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";

export default function Google() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.signIn().then(async (googleUser) => {
      const id_token = googleUser.getAuthResponse().id_token;
      try {
        const { data } = await axios.post(
          `http://localhost:5130/Authen/login-google`,
          {
            token: id_token,
          },
          {
            withCredentials: true,
          }
        );
        dispatch(signInSuccess(data));
        navigate("/");
      } catch (error) {
        console.error("Google login failed:", error);
      }
    });
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with Google
    </button>
  );
}
