import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name:"livechat",
    initialState:{
        chats:[]
    },
    reducers:{
        addToChat: (state,action) => {
            if(state.chats.length > 10){
                state.chats.pop();
            }
         state.chats.unshift(action.payload)
        },
    }
})

export const {
    addToChat
} = liveChatSlice.actions;

export default liveChatSlice.reducer;