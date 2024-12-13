import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        popularVideos:null,
        movieById:null,
        searchResults : null
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
        },
        addSearchResults:(state,action)=>{
            state.searchResults = action.payload
        }

    }
})


export const {toggleMenu,addPopularVideos,closeMenu,addMovieById,addSearchResults} = appSlice.actions;

export default appSlice.reducer;