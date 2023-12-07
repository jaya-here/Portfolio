import React from 'react'
import Card from './Card'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import itemReducer from './Slice'
import { useNavigate } from 'react-router-dom'
import { Products } from './Details'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export let store = configureStore({
    reducer: {
        item:itemReducer
    }
})

function Applayout() {

let navigate = useNavigate()

  return (
 <>
    <div style={{display:'block', 
    width:'100%', 
    textAlign:'center',
     padding:'0.5rem 0',
     }}>
    <button className='bg-gray-100 px-[0.9rem] py-[0.7rem] rounded-full text-center relative'
    onClick={()=>{navigate('/addToCart')}}>
    <FontAwesomeIcon className='text-2xl' icon={faCartShopping}></FontAwesomeIcon>
    <div
    style={{position:'absolute'}}
    className='w-5 h-5 rounded-full bg-red-700
    text-gray-100
    font-semibold
    top-0
    right-0
    text-xs
    flex
    items-center
    justify-center
    '><p>1</p></div>
    </button>
  
    </div>


    <div className='flex flex-wrap gap-1 justify-center'>
        {Products.map((product)=>{
            return (
                <Card
        newItem={product.newItem}
        image={product.image}
        name={product.name}
        price={product.price}
        discount={product.discount}
        discountPercent={product.discountPercent}
        productid={product.id}></Card>
            )
        })}
        
       {/* <Card
        newItem={true}
        image={faTree}
        name={'Christmas Tree Decoration'}
        price={19.99}
        discount={false}
        discountPercent={0}></Card>
         <Card
        newItem={true}
        image={faTree}
        name={'Christmas Tree Decoration'}
        price={19.99}
        discount={false}
    discountPercent={0}></Card>*/}
    </div>
    </>
  )
}

export default Applayout