import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        popularVideos:null,
        movieById:null
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        addPopularVideos:(state,action)=>{
            state.popularVideos = action.payload
        },
        closeMenu :(state,action)=>{
            state.isMenuOpen = false;
        },
        addMovieById:(state,action)=>{
            state.movieById =action.payload
        }

    }
})


export const {toggleMenu,addPopularVideos,closeMenu,addMovieById} = appSlice.actions;

export default appSlice.reducer;