import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Cars from "./pages/Cars";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import PaymentPage from "./pages/PaymentPage";
import ContractTerms from "./components/BookCar/Contract";
import BookingPage from "./pages/BookingPage";

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
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contract" element={<ContractTerms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
