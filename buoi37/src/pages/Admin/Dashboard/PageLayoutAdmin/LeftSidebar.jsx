import { Link, NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarehouseIcon from '@mui/icons-material/Warehouse';

function LeftSidebar() {
    return (
<div className="w-[15%] h-screen border-r border-black mt-16 bg-red-50">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-red-700" : "text-black")}
        >
          <div className="h-10 p-2.5 uppercase font-semibold border-y border-black cursor-pointer">
            <DashboardIcon/>
            Dashboard
          </div> </NavLink>

        <NavLink
          to="/user-management"
          className={({ isActive }) => (isActive ? "text-red-700" : "text-black")}
        >
          <div className="h-10 p-2.5 uppercase font-semibold border-y border-black cursor-pointer">
            <PersonIcon/>
            User Management
          </div>
        </NavLink>

      <NavLink
        to="/product-management"
        className={({ isActive }) => (isActive ? "text-red-700" : "text-black")}
      >
        <div className="h-15 p-2.5 uppercase font-semibold border-y border-black cursor-pointer">
          <WarehouseIcon/>
          Product Management
        </div>
      </NavLink>

      <Link to="/">
        <div className="h-10 p-2.5 uppercase font-semibold border-y border-black cursor-pointer">
        <HomeIcon/>
          Home Page
        </div>
      </Link>
    </div >
  );
}
export default LeftSidebar;