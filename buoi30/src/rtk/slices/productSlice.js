
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getListProduct = createAsyncThunk("getListProduct", async () => {
    const res = await axios.get("http://localhost:4000/products");
    return res.data;
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        productList: [],
        isSuccess: false,
        isError: false,
        message: "",
        favor: [],
        seafood: [],
        kid: [],
        traditional: [],
        drinks: [],
        chicken: [],
        pasta:[],
        sausage:[],
        potato:[],
        bread:[],
        dessert:[]
    },

    extraReducers: (builder) => {
        builder.addCase(getListProduct.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getListProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productList = [...action.payload];
            state.favor = [...action.payload].filter(x => x.category == 'favor')
            state.seafood = [...action.payload].filter(x => x.category == 'seafood')
            state.kid = [...action.payload].filter(x => x.category == 'kid')
            state.traditional = [...action.payload].filter(x => x.category == "traditional")
            state.drinks = [...action.payload].filter(x => x.category == "drinks")
            state.chicken = [...action.payload].filter(x => x.category == "chicken")
            state.pasta = [...action.payload].filter(x => x.category == "pasta")
            state.sausage = [...action.payload].filter(x => x.category == "sausage")
            state.potato = [...action.payload].filter(x => x.category == "potato")
            state.bread = [...action.payload].filter(x => x.category == "bread")
            state.dessert = [...action.payload].filter(x => x.category == "dessert")
        });

        builder.addCase(getListProduct.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.message = "Lỗi";
        });
    }
});

export default productSlice.reducer;