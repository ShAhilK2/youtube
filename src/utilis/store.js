import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice"

import searchSlice from "./seachSlice"
import chatSlice from "./chatSlice";
const store = configureStore({
    reducer:{
        app : appReducer,
        search : searchSlice,
        chat : chatSlice
      
    }

})



export default store;