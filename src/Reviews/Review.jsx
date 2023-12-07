import React from 'react'
import Heading from '../components/Heading'
import Card from '../components/Card'
import { UserReviews } from './ReviewDetails'
import useIndex from '../utils/useIndex'

function Review() {
 
  let {index:user, increaseIndex:nextUser, decreaseIndex:prevUser} = useIndex()
  let totalUser = UserReviews.length-1 


  return (
  <>
   <Heading>Reviews</Heading>
   <Card UserReviews={UserReviews}
   user={user}
   nextUser={nextUser}
   prevUser={prevUser}
   totalUser={totalUser}></Card>
   </>
  )
}

export default Review