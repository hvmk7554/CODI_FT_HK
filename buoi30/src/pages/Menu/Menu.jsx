
import {  NavLink, Outlet } from "react-router-dom"; 
import Pagelayout from "../../components/Pagelayout";

function Menu() {
return (
<Pagelayout>
<nav className="w-full bg-slate-300 h-10 flex justify-around items-center font-semibold sticky top-12 z-50">
 

<NavLink
to="pizza"
className={({ isActive }) =>
  isActive ? "text-red-700 font-bold": "text-black"
}
>
Pizza 
</NavLink>

<NavLink
to="sides"
className={({ isActive }) =>
isActive ? "Otext-red-700 font-bold": "text-black"
}
>
Side dish
</NavLink>

<NavLink
to="dessert"
className={({ isActive }) =>
isActive ? "text-red-700 font-bold": "text-black"
}
>
Dessert 
</NavLink>


 <NavLink
to="drinks"
className={({ isActive }) =>
isActive ? "Otext-red-700 font-bold": "text-black"
}
>
Drink 
</NavLink>
</nav>
<Outlet />
</Pagelayout>
);
}
 export default Menu