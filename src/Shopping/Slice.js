import { createSlice } from "@reduxjs/toolkit";


const itemSlice = createSlice({
    name:'item',
    initialState:{itemList:[]},
    reducers: {
        insert:(state, action)=>{
            state.itemList.push(action.payload)
        }
    }
})

export const {insert} = itemSlice.actions

export default itemSlice.reducer