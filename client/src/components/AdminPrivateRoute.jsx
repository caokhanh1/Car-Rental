import { Outlet, Navigate } from "react-router-dom";

export default function AdminPrivateRoute() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return currentUser && currentUser?.role === "Admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}
