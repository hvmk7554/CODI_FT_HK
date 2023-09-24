
import React,{useState} from 'react';
import { Form,Button,Table} from 'react-bootstrap';
import Navbar from '../components/Navbar';

export default function Todolist() {
    const categories = [
        'Phones',
        'Tablest',
        'PC',
        'Laptop',
      ]
      const [task,setTask] = useState({
      });
      const [taskList,setTaskLisk] = useState([]);
      
      const handleAdd = (item) => {
        const newTasklist =   [...taskList,item]
        setTaskLisk(newTasklist)
        setTask('')
      }
    const handleDelete = (item) =>{
        let index = taskList.findIndex(x => x === item );
        const updateTask =   [...taskList];
        updateTask.splice(index,1);
        setTaskLisk(updateTask)
    }

  return (
    <div>
        <Navbar categories ={categories}/>
        <div className='container row mt-5'>
            <div className="col-md-10 mt-5">
        <Form.Control value={task} onChange = {(e) => setTask(e.target.value)} type="text" placeholder="Nhap vao"/>
        </div>
        <div className="col-md">
           <Button onClick={() => handleAdd(task)} variant='primary'> Them  </Button>
            </div>
        </div>
        <Table  className='container mt-5'  striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Cong viec</th>
          <th>Hoan thanh</th>
          <th>Thao tac</th>
        </tr>
      </thead>
      <tbody>
        { taskList.length>0 && taskList.map((item,index) =>(
            <tr key={index}>
          <td>{index + 1}</td>
          <td>{item}</td>
          <td>
            <Form.Check />
          </td>
          <td>
          <Button onClick={() => handleDelete(item)}variant='danger'> Xoa </Button>
          </td>
        </tr>
        ))
        }    
      </tbody>
    </Table>
    </div>
  )
}
