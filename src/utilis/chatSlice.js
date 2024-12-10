import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_YOUTUBE_LIVE } from "./constant";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },reducers:{
      
        chatMessages :(state,action)=>{
            state.messages.splice( OFFSET_YOUTUBE_LIVE,1);
            state.messages.unshift(action.payload);
        }
    }
})

export const {chatMessages} = chatSlice.actions;


export default chatSlice.reducer;