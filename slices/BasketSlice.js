import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers : {
        addProducts: (state, action) => {
         state.items = [...state.items,action.payload]
        },
        remProducts: (state, action) => { 
         const stay = state.items.filter(item => {
             return item.id != action.payload
         })
         state.items = [...stay]
        }
    }
})

export const { addProducts,remProducts } = basketSlice.actions
export const subTotal = (state) => state.basket.items.reduce((total,item) => total + item.price , 0)
export default basketSlice.reducer;