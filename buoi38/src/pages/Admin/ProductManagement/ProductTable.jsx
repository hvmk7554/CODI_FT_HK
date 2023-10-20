

/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useEffect, useState } from "react";


export default function ProductTable() {
  const [isEdit,setIsEdit]= useState(false);
  const [productList, setProductList] = useState([]);
  const [productData, setProductData] = useState({
    id : 0,
    img : '',
    name:'',
    price:'',
    size : '',
    category: '',
    description:''
  });

  const randomId = () => {
    return Math.floor(Math.random() * 9999)
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => setProductList(res.data));
  }, [productList]);

  const handleAdd = async () => {
    const newData = {
        id : randomId(),
       img: productData.img,
        name: productData.name,
       price : productData.price,
        size : productData.size,
        category: productData.category,
       description: productData.description
    }
    //Phương thức post có 2 tham số, một là api url, newData
    await axios.post("http://localhost:4000/products",newData);
    
  }

  const handleDelete = async (item) => {
    await axios.delete(`http://localhost:4000/products/${item.id}`)
  }

  const handleEdit = (item) => {
    setIsEdit(true);
    setProductData(item);
  }

  const handleUpdate = async(item) => {
   await axios.put(`http://localhost:4000/products/${item.id}`, item)
  setIsEdit(false);
  setProductData({
    id: 0,
    img: '',
    name:'',
    price: '',
     size: '',
     category:'',
     description:''
});
}

  return (
    <div className="flex justify-center gap-10">
        <form onSubmit={(e)=> {
            e.preventDefault();
            isEdit ? handleUpdate(productData): handleAdd(); }} 
            
            className="h-40 border border-black w-52">
           
            <input type="text" placeholder="img" value={productData.img} onChange={(e) => setProductData({...productData,img : e.target.value})}/>
            <input type="text" placeholder="name" value={productData.name} onChange={(e) => setProductData({...productData,name : e.target.value})}/>
            <input type="price" placeholder="price" value={productData.price} onChange={(e) => setProductData({...productData,price : e.target.value})}/>
            <input type="size" placeholder="size" value={productData.size} onChange={(e) => setProductData({...productData,size : e.target.value})}/>
            <input type="text" placeholder="category" value={productData.category} onChange={(e) => setProductData({...productData,category : e.target.value})}/>
            <input type="text" placeholder="description" value={productData.description} onChange={(e) => setProductData({...productData,description : e.target.value})}/>
            <button className="w-20 h-10 text-white bg-gradient-to-r from-red-700 to-blue-700" type="submit">{isEdit?"Edit":"Submit"}</button>
        </form>
      <table className="border border-black">
        <thead>
          <tr className="border border-black">
            <th className="px-3 border border-black">ID</th>
            <th className="px-3 border border-black">img</th>
            <th className="px-3 border border-black">name</th>
            <th className="px-3 border border-black">price</th>
            <th className="px-3 border border-black">size</th>    
            <th className="px-3 border border-black">category</th>
            <th className="px-3 border border-black">Admin</th>
          </tr>
        </thead>
        <tbody>
          {productList.length > 0 && productList.map((item) => (
              <tr key={item.id} className="border border-black">
                <td className="px-3 border border-black">{item.id}</td>
                <td className="px-3 border border-black">
                <img src={item.img}/> 
                  </td>
                <td className="px-3 border border-black">{item.name}</td>
                <td className="px-3 border border-black">{item.price}$</td>
                <td className="px-3 border border-black">{item.size}</td>
                <td className="px-3 border border-black">{item.category}</td>
                <td className="px-3 border border-black w-1/2 "
                title={item.description}
                align="left">
                <div className="flex items-center">
                  <div className="truncate w-[300px]">{item.description}</div>
                </div>
               
                </td>
                
                <td className="px-3 border border-black">
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