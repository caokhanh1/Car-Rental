import { Outlet, Navigate } from 'react-router-dom';
export default function OnlyAdminPrivateRoute() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser && currentUser.role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}
