import { createSlice } from "@reduxjs/toolkit";

function introduceDelay()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        }, 5000)
    })

}


const arraySlice = createSlice({
    name:"array",
    initialState: {
        arr:[],
        loading:false,
        error:false
    },
    reducers: {
        push(state, action) {
            state.arr.push(action.payload)
        },
        remove(state, action){
            state.arr.remove(action.payload)
        },
        setLoading:(state)=>{
            state.loading = true
        },
        resetLoading:(state)=>{
            state.loading = false
        },
        setError:(state)=>{
            state.error = true
        },
        resetError:(state)=>{
            state.error=false
        }
    }
})

export function insert(value) {
    return async function (dispatch)
    {
        dispatch({type:'array/setLoading'})
        const result = await introduceDelay()
        dispatch({type:'array/resetLoading'})
        dispatch({type:'array/push', payload:value})
        dispatch({type:'array/push', payload:result})
    }
}

export default arraySlice.reducer