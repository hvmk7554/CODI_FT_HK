/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux"; 
import Pagelayout from "../../components/Pagelayout";
import CartItem from "../Cart/CartItem";
import { decrease, increase, removeCart } from "../../rtk/slices/cartSlice"; 
import { useNavigate } from "react-router";
import TextFields from "../../components/Textfield/Textfield";
import { useEffect, useState } from "react";
import SingleSelect from "../../components/Dropdown/SingleSelect";
import axios from "axios";


function Checkout() {
    const userEmail = JSON.parse(localStorage.getItem("userInfor")).email;
    const [email, setEmail] = useState(userEmail);
    const [provinces, setProvinces] = useState([]);
    console.log(provinces)
    const { cartList } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
     const navigate = useNavigate();

    const handleIncrease = (item) => {
        dispatch(increase(item));
    };
    
    const handleDecrease = (item) => {
         if (item.quantity <= 1) { 
            dispatch(removeCart(item));
    } else {
    dispatch(decrease(item));
    }    
};

    const handleRemove = (item) => { 
        dispatch(removeCart(item));
    };


const totalPrice = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity,0) ;

const apiGetPublicProvinces = () => new Promise((resolve, reject) => { 
    try {
    const response = axios.get("https://vapi.vnappmob.com/api/province/");
     resolve(response)
} catch (error) {
    reject(error)
}
})
    useEffect(() => {
        const fetchPublicProvince = async() => {
        const response = await apiGetPublicProvinces();
         console.log(response)
        if (response.status === 200) {
    setProvinces(response?.data.results);
        }
    };
    fetchPublicProvince();
}, [])

const convertDataProvince = (array) => {
    const ProvinceList = array.map((item) => ({ 
       value: item.province_id, 
       label: item.province_name,
}));
return ProvinceList;
};

console.log(convertDataProvince (provinces))



    const dataProvince = [
        { value: 1, label: "Hồ Chí Minh"}, 
        {value : 2, label : "Hà Nội"}, 
        {value : 3, label: "Đà Nẵng"},
    ]

    return (
        <Pagelayout>
            {cartList.length === 0 && navigate("/")}
            <form className="mt-20 flex mx-auto max-w-2x1 px-4 sm:px-6 lg:max-w-7x1 lg:px-8 h-auto"> <div className="w-3/5 bg-red-100 p-5">
                <p className="font-semibold text-base">Contact Information</p>
                <TextFields name="Email address" type="email" required={true} width="600px" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="font-semibold text-base mt-5">Shipping Information</p>
                <div className="flex gap-5">
                    <TextFields name="First Name" required={true} width="290px" /> 
                    <TextFields name="Last Name" required={true} width="290px" />
                </div>
                <div className ="flex gap-5">
                <SingleSelect
                name="Province/City"
                width="290px"
                options={convertDataProvince(provinces)}
                required={true}
                />

                <SingleSelect
                    name="District"
                    width="290px"
                    options={dataProvince}
                    required={true}
                />
            </div>

                <div className="flex gap-5">
                    <SingleSelect
                    name = "Ward/Commune" 
                    width="290px"
                    options={dataProvince}
                    required={true}
                    />
</div>

                <TextFields name="Address" required={true} width="600px" />
                <TextFields name="Phone" type="phone" required={true} width="600px" />
            </div>
            <div className="w-2/5 p-5">
                <p className="font-semibold text-base">Order Sumary</p>
                 <div>
                    <div className="mt-5 rounded-1g">
                        {cartList.length > 0 && cartList.map((item) => (
                            <CartItem
                        key={item.id} 
                        item={item}
                        handleRemove={() => handleRemove(item)} 
                        handleIncrease={() => handleIncrease(item)} 
                        handleDecrease={() => handleDecrease(item)}
                        />
                        ))}
                        {cartList.length == 0 && (
                        <img src="../src/assets/empty_cart.jfif" alt="not-found" />
                        )}
                        </div>
                    <div className="p-2 font-semibold bg-white">
                        <div className="flex justify-between font-semibold">
                            <p className="font-medium">Subtotal</p>
                            <p>${totalPrice}</p>
                        </div>
                        <div className="flex justify-between mt-3"> 
                        <p className="font-medium">Shipping</p>
                         <p> $0 </p>
                        </div>
                        <div className="flex justify-between mt-3"> 
                        <p>Total</p>
                            <p>${totalPrice}</p>
                        </div>
                        <button
                    type="submit"
                    className="mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-900 px-2 py-1.5 rounded-md"
                  >
                    Confirm order
                  </button>
                    </div>
                    </div>
                    </div>
                    </form>
                    </Pagelayout>
    
);
}

export default Checkout