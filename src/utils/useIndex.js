import React from 'react'
import { useState } from 'react'

function useIndex() {
  const [index, setIndex] = useState(0)

  function increaseIndex(maxIndex)
  {
    if (index === maxIndex)
    {
        return
    }
    else
    {
        setIndex((curr)=>{return curr+1})
    }
  }

  function incrementByAmount(val)
  {
    setIndex(prev=>prev+val)
  }

  function decreaseIndex()
  {
    if (index === 0)
    {
        return
    }
    else
    {
        setIndex((curr)=>{return curr-1})
    }
  }

  function reset() {
    setIndex(0)
  }



  return {index, increaseIndex, decreaseIndex, reset, incrementByAmount} 
}

export default useIndex