import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashBoard/DashSidebar";
import DashUsers from "../components/DashBoard/DashUser";
import DashProfile from "../components/DashBoard/DashProfile";
import DashComments from "../components/DashBoard/DashComment";
import DashCoupon from "../components/DashBoard/DashCoupon";
import DashRevenue from "../components/DashBoard/DashRevenue";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {tab === "dash" && <DashRevenue />}
      {tab === "profile" && <DashProfile />}
      {tab === "users" && <DashUsers />}
      {tab === "comments" && <DashComments />}
      {tab === "coupon" && <DashCoupon />}
    </div>
  );
}
