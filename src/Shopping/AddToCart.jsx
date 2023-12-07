import React from 'react'
import { useSelector } from 'react-redux'


function AddToCart() {

  const itemList = useSelector(state=>state.item.itemList)
  console.log(itemList)

  if (itemList.length === 0)
  {
    return <div
    className='text-5xl
    w-[100%]
    m-[auto]
    mt-[10rem]'>No items in cart</div>
  }


  return (
   <div>
    {itemList.map((item)=>{
        return <div>{item}</div>
    })}
   </div>
  )
}

export default AddToCart