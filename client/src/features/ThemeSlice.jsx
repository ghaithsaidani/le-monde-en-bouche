import {createSlice} from "@reduxjs/toolkit";



export const ThemeSlice=createSlice({
    name:"isLight",
    initialState:{
        value:true
    },
    reducers:{
        changetheme:(state) => {
            state.value = !state.value
        }
    }
})
export default ThemeSlice.reducer
export const isLightState = (state) => state.isLight.value;
export const {changetheme} = ThemeSlice.actions;

