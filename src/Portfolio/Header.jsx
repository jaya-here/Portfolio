import React from 'react'
import styled from 'styled-components'
import Picture from '../assets/picture.jpg'
import './Header.css'

const Image = styled.img`
    width: 9rem;
    height: 9rem;
    border-top-right-radius: 1rem;
    border-top-left-radius:1rem;
    margin-left:1rem;

`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 13rem 1fr;
    grid-template-rows: 1fr 1.5fr;
`

function Header() {
  return (
    <Grid>
    <div className='flex items-end justify-center translate-y-[-1rem]'>
    <h3 className='text-purple-400 text-5xl font-serif font-thin header'>Hello!</h3>
    </div>
    <div>
        <h3 className='text-purple-400 text-5xl font-serif header'>welcome to</h3>
        <h3 className='text-purple-400 text-5xl font-serif inline border-purple-600 header'
        style={{borderBottom:'3px dashed'}}>{`my portfolio :)`}</h3>
    </div>
    <div className='flex items-center justify-center'>
        <Image src={Picture}></Image>
    </div>
    <div className='flex flex-col justify-center leading-4'>
        <div className='flex justify-start items-center gap-1'>
        <h4 className='text-purple-400 text-2xl font-bold
        '>My name is Jayaashree S</h4>
        </div>
        <p>
        I'm a results-driven professional with a keen interest in web
        development with a focus on JavaScript programming. I am
        now seeking opportunities in frontend development.
        </p>
        <p>{'\n'}</p>
        <p>
        I'm interested in web development and enjoy exploring different aspects of web development and the various tools that can be employed for a great user experience.
        </p>
        <div className='flex gap-1'>
            <p className='border 
            border-solid 
            border-purple-400 
            rounded-xl
            p-1 px-2
            my-2'>Frontend Developer</p>
            <p className='border 
            border-solid 
            border-purple-400 
            rounded-xl
            p-1 px-2
            my-2'>React Developer</p>
        </div>
    </div>
    </Grid>
  )
}

export default Header