/* eslint-disable react/prop-types */

import AdminHeader from "./AdminHeader"; 
import LeftSidebar from "./LeftSidebar";

function PageLayoutAdmin({ children }) { 
    return ( 
    <div>
<AdminHeader />
<div className="flex w-full">
<LeftSidebar />
<div className="w-[85%] mt-20">{children}</div>
</div>
</div>
    );
}
export default PageLayoutAdmin;
