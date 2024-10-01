import { Navigate, Outlet } from "react-router-dom";

const GuestSkin = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role === 'guru') {
    return <Navigate to="/admin" />;
  } else if (token && role === 'siswa') {
    return <Navigate to="/siswa" />;
  }

  // Jika tidak ada token, tampilkan konten untuk pengguna yang belum login
  return <Outlet />;
};

export default GuestSkin;
