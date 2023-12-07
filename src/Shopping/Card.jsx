import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useToggle } from '../utils/useToggle'
import './Card.css'
import { insert } from './Slice'
import { useSelector, useDispatch } from 'react-redux'


function Card({newItem,
    image,
    name,
    price,
    discount,
    discountPercent}) {

  const dispatch = useDispatch()

  const Lock = <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>

  const actualPrice = (discount?(price - price*(discountPercent/100)):0).toFixed(2)

  const {state:addToCart, handleToggle} = useToggle()

  return (
    <div className='relative card-item' style={{flex:'0 0 49%'}} >
        <div className='bg-gray-100 relative w-[100%] flex flex-col items-center'>
        <FontAwesomeIcon className='text-[4rem] p-[2.25rem] pb-[3.25rem]' icon={image}></FontAwesomeIcon>
        <button className={`absolute bottom-0 left-0 w-[100%] 
        text-center
        bg-blue-400
        text-sm
        font-semibold
        text-gray-100
        py-[0.3rem]
        ${addToCart?'notAddtoCart':'addToCart'}`}
        onClick={()=>{handleToggle()
        dispatch(insert(name))}}><span className='mr-[0.3rem]'
       >Add to Cart</span> {Lock}</button>

    
        </div>
        <h5 className='text-sm font-semibold'>{name}</h5>
        {(discount)?
        <div className='flex items-center gap-3'>
        <h4 className='text-md font-bold'>{`$${actualPrice}`}</h4>
        <p className='text-sm text-gray-300 line-through'>{`$${price}`}</p>
        </div>:
        <>
        <h4 className='text-md font-bold'>{`$${price}`}</h4>
        </>}

           {/*New Item*/}    

        {newItem && <div className='bg-blue-400 
        text-gray-100
        p-1
        absolute
        top-0
        left-0
        text-[0.6rem]'>NEW</div>}

        {/*Discount*/}
        
        {discount && <div
        className='bg-red-700
        text-gray-100
        p-1
        absolute
        top-0
        left-0
        text-[0.6rem]'>{`${discountPercent}%`}</div>}
       
    </div>
  )
}

export default Card