import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk("getProducts", async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      console.log(result.products); 
      return result.products; 
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  });
  

export const getProductSlice=createSlice({
    name:"gitProduct",
    initialState:{
        Products:[],
        loading:false,
        error:null,
    },
   extraReducers:{
    [getAllProducts.pending]:(state)=>{
        state.loading=true
    },
    [getAllProducts.fulfilled]:(state,action)=>{
        state.loading=false;
        state.Products=action.payload;
    },
    [getAllProducts.rejected]:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    }
   }
});

export default getProductSlice.reducer