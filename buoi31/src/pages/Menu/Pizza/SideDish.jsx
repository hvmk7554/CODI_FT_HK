

import { useDispatch, useSelector } from "react-redux"; 
import MenuLayout from "../MenuLayout/MenuLayout"
import { useEffect } from "react";
import { getListProduct } from "../../../rtk/slices/productSlice";

function SideDish() {
const {chicken,sausage,pasta,potato,bread} = useSelector(state=>state.product); 
const dispatch = useDispatch();

useEffect(() =>{
dispatch(getListProduct())
},[])


return(
<div>
<MenuLayout name="CHICKEN" data={chicken}/>
<MenuLayout name="PASTA " data={pasta}/> 
<MenuLayout name="SAUSAGE" data={sausage}/>
<MenuLayout name="POTATO" data={potato}/>
<MenuLayout name="BREAD" data={bread}/>
</div>
)
}

export default SideDish;