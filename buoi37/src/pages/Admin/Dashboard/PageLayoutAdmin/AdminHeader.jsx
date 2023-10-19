/* eslint-disable no-unused-vars */

import { useDispatch,useSelector} from "react-redux";

import { Avatar } from "@mui/material";
import { useNavigate,Link } from "react-router-dom";
import { logout } from "../../../../rtk/slices/authSlice";


function AdminHeader() {

  const dispatch = useDispatch();
  const userInfor = JSON.parse(localStorage.getItem("userInfor"));
  const navigate = useNavigate();

  const handleLogout = () =>  {
    navigate("/")
  dispatch(logout()) 
  window.location.reload();
  }

  return (
    <div>
        <header className="fixed top-0  w-full z-[999]">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="../src/assets/logo2.png"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-3xl font-bold text-red-500 whitespace-nowrap dark:text-white">
             Food
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
            <div className="flex items-center gap-5">
                <Avatar alt= "default" src={userInfor.avatar}/>
              <p className="text-base font-semibold">Hi {userInfor.firstname + " " + userInfor.lastname}</p>
              <button  onClick={handleLogout} className="text-gray-800 border border-gray-300 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                Log out
              </button>
</div>
</div>
</div>
</nav>
</header>
    </div>
  );
}

export default AdminHeader