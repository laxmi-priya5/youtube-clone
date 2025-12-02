import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice'
import searchReducer  from './searchSlice'
import chatSlice from './chatSlice'
const Store = configureStore({
    reducer:{
        app: appReducer,
        search : searchReducer,
        chat:chatSlice,
    }
})
export default Store;