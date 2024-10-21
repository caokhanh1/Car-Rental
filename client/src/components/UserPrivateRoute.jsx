import { Outlet, Navigate } from "react-router-dom";

export default function UserPrivateRoute() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <Navigate to="/sign-in" />;
  }

  if (currentUser?.role === "Admin") {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}
