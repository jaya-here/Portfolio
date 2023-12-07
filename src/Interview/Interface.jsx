import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {insert} from './services/slice'

function Interface() {

 const arr = useSelector((state)=>{return state.array})

 const dispatch = useDispatch()

 console.log(arr.loading)

 if (arr.loading)

 {
    return <div>Loading...</div>
 }
    
  return (
    <div>
        <button onClick={()=>{dispatch(insert(50))}}>Clik me</button>
    </div>
  )
}

export default Interface