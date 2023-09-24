import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import {BrowserRouter, Route, Routes, } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Todo from "./pages/Todo";
import Todolist from "./pages/Todolist";

function App() {
  
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/About" element={<About/>}/>
        <Route path = "/Todo" element={<Todolist/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
