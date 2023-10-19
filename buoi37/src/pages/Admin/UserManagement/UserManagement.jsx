import PageLayoutAdmin from "../Dashboard/PageLayoutAdmin/PageLayoutAdmin"
import UserTable from "./UserTable"


function UserManagement() {
  return (
    <PageLayoutAdmin>
      <div className="px-5">
    <p className="font-bold text-2xl">User Management</p>
    <UserTable/>
    </div>
    </PageLayoutAdmin>
  )
}

export default UserManagement