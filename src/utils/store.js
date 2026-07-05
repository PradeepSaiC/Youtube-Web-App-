import {configureStore} from "@reduxjs/toolkit"
import sidebarReducer from "./sidebarSlice"
import searchReducer from "./searchSlice"
import liveChatReducer from "./liveChatSlice";
const store = configureStore({
    reducer:{
        sidebar:sidebarReducer,
        search:searchReducer,
        livechat:liveChatReducer
    },
})

export default store;