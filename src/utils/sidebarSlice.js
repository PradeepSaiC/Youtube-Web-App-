import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isSidebarOpen:false
    },
    reducers:{
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = true;
        }
    }
})

export const {
    toggleSidebar,
    closeSidebar
} = sidebarSlice.actions;
export default sidebarSlice.reducer;