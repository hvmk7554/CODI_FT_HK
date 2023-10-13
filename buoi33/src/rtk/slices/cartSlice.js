import { createSlice } from "@reduxjs/toolkit";

const cartList  =  JSON.parse(localStorage.getItem("cart")  ) ?? [ ]
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        cartList: [...cartList],
        isSuccess: false,
        isError: false,
        message: "",  
    },
    reducers: {

        addCart: (state, action) => {
            // Tìm kiếm xem sản phẩm có tồn tại hay không
            let index = state.cartList.findIndex((x) => x.id == action.payload.id);
            //ham findIndex nếu có thì trả về  vị trí thành phần đó trong mảng, nếu không trả về -1
            if (index !== -1) {
                // tăng số lượng nếu đã có 
                state.cartList[index].quantity += 1
            } else {
                // thêm sp.
                state.cartList.push(action.payload);
            }
            // cập nhật lại giỏ hàng.
            state.cartList = [...state.cartList];
            localStorage.setItem("cart",JSON.stringify(state.cartList))
        },

        increase: (state, action) => {
            //Tìm kiếm xem sản phẩm có tồn tại hay không
            let index = state.cartList.findIndex((x) => x.id == action.payload.id);
            if (index !== -1) {
                //tăng số lượng nếu sp đã có
                state.cartList[index].quantity += 1
            }
            //cập nhật lại giỏ hàng
            state.cartList = [...state.cartList];
            localStorage.setItem("cart",JSON.stringify(state.cartList))
        },

        decrease: (state, action) => {
            //Tìm kiếm xem sản phẩm có tồn tại hay không
            let index = state.cartList.findIndex((x) => x.id == action.payload.id);
            if (index !== -1) {
                //tăng số lượng nếu sp đã có
                state.cartList[index].quantity -= 1
            }
            //cập nhật lại giỏ hàng
            state.cartList = [...state.cartList];
            localStorage.setItem("cart",JSON.stringify(state.cartList))
        },

        removeCart: (state, action) => {
            //Tìm kiếm xem sản phẩm có tồn tại hay không.
            let index = state.cartList.findIndex((x) => x.id = action.payload.id);
            if (index !== -1) {
                // xóa đối tượng
                state.cartList.splice(index, 1)
            }
            //Cập nhật lại giờ hàng
            state.cartList = [...state.cartList];
            localStorage.setItem("cart",JSON.stringify(state.cartList))
        }

    }
});
export const { addCart, increase, decrease, removeCart } = cartSlice.actions;
export default cartSlice.reducer;