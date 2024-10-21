import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Cars from "./pages/Cars";
import Footer from "./components/Footer";
import Booking from "./pages/BookingPage";
import UserPrivateRoute from "./components/UserPrivateRoute";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import PaymentPage from "./pages/PaymentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />

        {/* User Private Routes */}
        <Route element={<UserPrivateRoute />}>
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Admin Private Route */}
        <Route element={<AdminPrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
