import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages : []
    },
    reducers:{
        addToMessage :(state , actions)=>{
             state.messages.unshift(actions.payload)   //Note-2
        }
    }
})

export const {addToMessage} = chatSlice.actions;
export default chatSlice.reducer;
