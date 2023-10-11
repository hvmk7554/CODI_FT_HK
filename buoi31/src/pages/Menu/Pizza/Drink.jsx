
import { useDispatch, useSelector } from "react-redux"; 
import MenuLayout from "../MenuLayout/MenuLayout"
import { useEffect } from "react";
import { getListProduct } from "../../../rtk/slices/productSlice";

function Drinks() {
const {drinks} = useSelector(state=>state.product); 
const dispatch = useDispatch();

useEffect(() =>{
dispatch(getListProduct())
},[])


return(
<div>
<MenuLayout name="DRINKS" data={drinks}/>

</div>
)
}

export default Drinks;