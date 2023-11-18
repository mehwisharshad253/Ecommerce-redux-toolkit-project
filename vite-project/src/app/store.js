import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../features/cartSlice'
import getProductSlice, { getAllProducts } from '../features/getProductSlice'

export const store=configureStore({
    reducer:{
        allCart:cartSlice,
        app:getProductSlice
    }
})

store.dispatch(getAllProducts())