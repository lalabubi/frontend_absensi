import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import AdminGuarded from "../Skin/AdminGuarded";

import DashboardAdmin from "../pages/Dashboard/DashboardAdmin";
import SiswaAdmin from "../pages/Dashboard/SiswaAdmin";
import LaporanKehadiran from "../pages/Dashboard/LaporanKehadiran";
import AdminGuest from "../Skin/AdminGuest";
import DashboardSiswa from "../pages/SiswaDashboard/DashboardSiswa";
import SiswaGuarded from "../Skin/SiswaGuarded";
import Kehadiran from "../pages/SiswaDashboard/components/Kehadiran";
import GuestSkin from "../Skin/GuestSkin";

const routes = createBrowserRouter([
    {
        path: "/admin/",
        element: <AdminGuarded/>,
        children: [
            {path: "", element:<DashboardAdmin/>},
            {path: "siswa", element:<SiswaAdmin/>},
            {path: "kehadiran", element:<LaporanKehadiran/>}
        ]
    },
    {
        path: "/siswa/",
        element: <SiswaGuarded/>,
        children: [
            {path:'', element: <DashboardSiswa/>},
            {path:'kehadiran', element: <Kehadiran/>}
        ]
    },
    {
        path: "/",
        element: <GuestSkin />,
        children: [
            {path: '/', element: <LoginPage/>}
        ]    
    },
])

export default routes