import { Navigate, Outlet } from "react-router-dom";

const AdminGuest = () => {
  if (localStorage.getItem("token") !== null) {
    return <Navigate to={"/admin"} />;
  }

  return <Outlet />;
};

export default AdminGuest;