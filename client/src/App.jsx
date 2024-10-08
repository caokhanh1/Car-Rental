import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Cars from "./pages/Cars";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import PrivateRoute from "./components/PrivateRoute";
import CarRentalRegistration from "./pages/CarRentalRegistration";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import PaymentPage from "./pages/PaymentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />      
        </Route>

        <Route element={<AdminPrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/payment" element={<PaymentPage/>} />   
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/register-car" element={<CarRentalRegistration />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
