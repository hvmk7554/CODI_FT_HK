/* eslint-disable no-unused-vars */
import Pagelayout from "../../components/Pagelayout";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { decrease, increase, removeCart } from "../../rtk/slices/cartSlice";
import { useNavigate} from "react-router";

function Cart() {
const {cartList} = useSelector(state => state.cart);
const dispatch = useDispatch();
const navigate = useNavigate();

const handleIncrease = (item) => {
dispatch(increase(item))
}

const handleDecrease = (item) => {
if (item.quantity <= 1) { 
  dispatch(removeCart(item))
} else {
dispatch(decrease(item))
}
}

const handleRemove = (item) => { 
  dispatch(removeCart(item))
}

const totalPrice = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity,0) 
console.log(totalPrice)
 
const handleCheckout = () =>{
  if (cartList.length !== 0){
  navigate('/checkout')
  } else {
    alert('nothing in your cart')
  }
}

return ( <Pagelayout>

      <div className="h-auto bg-[#FBFBF8] pt-20">
        
        <h1 className="font-bold text-center mb-18 text-2x1">Cart Items</h1>
        <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 x1:px-0"> 
        <div className="rounded-lg md:w-2/3">
          {cartList.length > 0 && cartList.map((item) => (
            <CartItem key={item.id} item = {item} 
            handleRemove={() => handleRemove(item)}
            handleIncrease={() => handleIncrease(item)}
            handleDecrease={() => handleDecrease(item)}
            />
  ))}
          {cartList.length == 0 && (<img src="../src/assets/empty_cart.jfif" alt="not-found" />)}
        </div>
          <div className="h-full p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3">
            <div className="flex justify-between mb-2">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$0</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold">${totalPrice}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button  onClick ={handleCheckout}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </Pagelayout>
  );
}

export default Cart;
