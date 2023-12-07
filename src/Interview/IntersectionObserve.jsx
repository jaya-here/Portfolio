import React from 'react'
import { useRef, useCallback, useState } from 'react'
import { useToggle } from '../utils/useToggle'
import useIndex from '../utils/useIndex'
import { useParagraphs } from './useParagraphs'

export default function IntersectionObserve() {
const {state:treat, handleToggle:setTreat} = useToggle()
const {index, incrementByAmount} = useIndex()
const {paragraphs, isLoading, count} = useParagraphs(index)
let paraContent = useRef([])

let output = []

if (!isLoading)
{
  paraContent.current = [...paraContent.current, ...paragraphs]
  output = [...paraContent.current]
  console.log("output", output)
}

let ref1 = useRef()

let refFunc = useCallback((node)=>{

  if (ref1.current) ref1.current.disconnect()
  
  ref1.current = new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
    if (entry.isIntersecting) {
      incrementByAmount(10)
    }
   })
  }

  )

  if (node) ref1.current.observe(node)

  }, [index])

  return (
    <div className='bg-blue-900'>
        <div className='flex
        flex-col
        gap-3
        w-[30rem]
        m-[auto]
        '>
          {!isLoading && output.map((paragraph, index)=>{
            if (index === output.length-1)
            {
              return (
                <div ref={refFunc} className='py-[0.5rem]' key={`para-${index}`}>
                <h4
                className='text-gray-100 font-bold text-2xl text-justify'>{paragraph.title}</h4>
                <p
                className='text-gray-100 font-thin text-regular text-justify'>{paragraph.paragraph}</p> 
                </div>
              )
            }
            return (
              <div className='py-[0.5rem]' key={`para-${index}`}>
                <h4
                className='text-gray-100 font-bold text-2xl text-justify'>{paragraph.title}</h4>
                <p
                className='text-gray-100 font-thin text-regular text-justify'>{paragraph.paragraph}</p> 
              </div>
            )
          })}
        </div>
    </div>
  )
}
