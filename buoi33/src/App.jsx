import { Route, Routes } from "react-router-dom" 
import HomePage from "./pages/HomePage" 
import Login from "./pages/Login"
import Register from "./pages/Register" 
import Cart from "./pages/Cart/Cart" 
import Menu from "./pages/Menu/Menu"
import Pizza from "./pages/Menu/Pizza/Pizza" 
import OrderTracking from "./pages/OrderTracking/OrderTracking"
import SideDish from "./pages/Menu/Pizza/SideDish"
import Dessert from "./pages/Menu/Pizza/Dessert" 
import Drink from "./pages/Menu/Pizza/Drink"
import Checkout from "./pages/Checkout/Checkout"
function App() {

return( <>
<Routes>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/" element={<HomePage/>}/> 
<Route path="/login" element={<Login/>}/> 
<Route path="/order-tracking/:id" element={<OrderTracking/>}/>
<Route path="/register" element={<Register/>}/> 
<Route path="/cart" element={<Cart/>}/> 
<Route path="/menu" element={<Menu/>}>
<Route path="pizza" element={<Pizza/>}/>
<Route path="sides" element={<SideDish/>}/>
 <Route path="dessert" element={<Dessert/>}/>
  <Route path="drinks" element={<Drink/>}/>
   </Route>
</Routes>
</>
)
}
export default App