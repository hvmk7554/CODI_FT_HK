import React, { useState } from 'react'
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';

function Todo() {
    const image1='https://shopdunk.com/images/uploaded/banner/thang%209%202023/banner_iphone_15_3_PC_coc.jpg';
    const image2='https://shopdunk.com/images/uploaded/banner/thang%209%202023/banner%20ipad%20gen9%20T9_Banner%20PC.jpg';
    const image3='https://shopdunk.com/images/uploaded/banner/thang%209%202023/banner%20macbook%20air%20t9_Banner%20PC.jpg';
    const categories = [
      'Phones',
      'Tablest',
      'PC',
      'Laptop',
    ]
    const [todos,setTodo] =useState([]);
    const [value, setValue] = useState('');

    const addTodo =  ()  =>{
        if(value!=''){
            var d = new Date();           
            var item = {
             'todo':value,
             'status':false,  
             'creat_at':d.toLocaleString()
            }
        setTodo(todo=>[...todos,item]);
    }
}
    return (
    <>
    <Navbar categories ={categories}/>
    <div className='container mt-4'>
      <div className='row'>
        <div className="col-md-8">
     <input type="text" placeholder='Todo' onChange={(e)=> setValue(e.target.value)} className="form-control" /> 
</div>
    <div className="col-md">
<button className='btn btn-primary w-100' onClick={addTodo}> Them </button>
    </div>
    </div>    
        <div className='row mt3'>
            <div class="table-responsive">
                <table class="table table-primary">
                    <thead>
                        <tr>
                            <th >#</th>
                            <th >Todo</th>
                            <th >Hoan thanh</th>
                            <th >Tuy chinh</th>
                        </tr>
                    </thead>
                    <tbody>
                       {todos && todos.length>0 && todos.map((item,index)=>
                       <tr className=''>
                        <td>{++index}</td>
                        <td>{item.todo}</td>
                        <td><input type="checkbox"/></td>
                        <td><button className='btn btn-danger'>Xoa </button> </td>
                       </tr>
                       )}
                        
                    </tbody>
                </table>
            </div>
            


        </div>
   </div>  
    </>
  )
}

export default Todo