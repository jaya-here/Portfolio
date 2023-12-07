import React from 'react'
import Header from './Header'
import ProfileContent from './ProfileContent'
import Projects from './Projects'

function AppOutline() {
  return (
    <div style={{width:'800px'}}
     className='py-[1.5rem] px-[5rem]'>
        <Header></Header>
        <ProfileContent></ProfileContent>
        <Projects></Projects>
    </div>
  )
}

export default AppOutline