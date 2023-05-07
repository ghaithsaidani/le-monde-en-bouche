import { createSlice } from "@reduxjs/toolkit";

export const NavbarSlice=createSlice({
    name:'isCollapsed',
    initialState:{
        value:false
    },
    reducers: {
        handleChange:(state)=> {
            state.value=!state.value
        },
    },
})

export const isCollapsedState = (state) => state.isCollapsed.value;
export const { handleChange } = NavbarSlice.actions
export default NavbarSlice.reducer