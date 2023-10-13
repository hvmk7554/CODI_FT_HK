/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
// json-server --watch src/db.json --port 4000

function Test() {
  const [isEdit,setIsEdit]= useState(false);
  const [userList, setUserlist] = useState([]);
  const [userData, setUserData] = useState({
    id : 0,
    fullname : '',
    email : '',
    phoneNumber : '',
    password : ''
  });

  const randomId = () => {
    return Math.floor(Math.random() * 9999)
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setUserlist(res.data));
  }, [userList]);

  const handleAdd = async () => {
    const newData = {
        id : randomId(),
        fullname : userData.fullname,
        email : userData.email,
        phoneNumber : userData.phoneNumber,
        password : userData.password,
        isAdmin : false
    }
    //Phương thức post có 2 tham số, một là api url, newData
    await axios.post("http://localhost:4000/users",newData);
    
  }

  const handleDelete = async (item) => {
    await axios.delete(`http://localhost:4000/users/${item.id}`)
  }

  const handleEdit = (item) => {
    setIsEdit(true);
    setUserData(item);
  }

  const handleUpdate = async(item) => {
   await axios.put(`http://localhost:4000/users/${item.id}`, item)
  setIsEdit(false);
  setUserData({
    id: 0,
    fullname: '',
    email: '',
    phoneNumber: '',
     password: '',
     isAdmin: false
});
}

  return (
    <div className="flex justify-center gap-10">
        <form onSubmit={(e)=> {
            e.preventDefault();
            isEdit ? handleUpdate(userData): handleAdd(); }} 
            
            className="h-40 border border-black w-52">
           
            <input type="text" placeholder="fullname" value={userData.fullname} onChange={(e) => setUserData({...userData,fullname : e.target.value})}/>
            <input type="email" placeholder="email" value={userData.email} onChange={(e) => setUserData({...userData,email : e.target.value})}/>
            <input type="password" placeholder="password" value={userData.password} onChange={(e) => setUserData({...userData,password : e.target.value})}/>
            <input type="phone" placeholder="phoneNumber" value={userData.phoneNumber} onChange={(e) => setUserData({...userData,phoneNumber : e.target.value})}/>
            <button className="w-20 h-10 text-white bg-gradient-to-r from-red-700 to-blue-700" type="submit">{isEdit?"Edit":"Submit"}</button>
        </form>
      <table className="border border-black">
        <thead>
          <tr className="border border-black">
            <th className="px-3 border border-black">ID</th>
            <th className="px-3 border border-black">Fullname</th>
            <th className="px-3 border border-black">Email</th>
            <th className="px-3 border border-black">Password</th>
            <th className="px-3 border border-black">Phone</th>
            <th className="px-3 border border-black">Admin</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 && userList.map((item) => (
              <tr key={item.id} className="border border-black">
                <td className="px-3 border border-black">{item.id}</td>
                <td className="px-3 border border-black">{item.fullname}</td>
                <td className="px-3 border border-black">{item.email}</td>
                <td className="px-3 border border-black">{item.password}</td>
                <td className="px-3 border border-black">{item.phoneNumber}</td>
                <td className="px-3 border border-black">{item.isAdmin.toString()}</td>
                <td className="px-3 border Oborder-black">
                <button onClick={()=> handleDelete(item)} 
                className="w-10 h-10 text-white bg-red-500">Xoa</button> 
                <button onClick={() => handleEdit(item)} 
                className="w-10 h-10 text-white bg-blue-500">Sua</button> 
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div >
  );
          }


export default Test;
