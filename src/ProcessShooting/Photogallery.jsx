import React from 'react'
import { faChevronDown, faChevronUp, faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useToggle } from '../utils/useToggle'
import styled from 'styled-components'
import { PhotoType } from './PhotoDetails'
import useIndex from '../utils/useIndex'
import { useState } from 'react'

const Button = styled.button`
 background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  text-align: inherit;
  font: inherit;
  border-radius: 0;
  appearance: none;

  &:focus{
    outline:none;
  }


`

function leftPicture(galleryContent, setGalleryContent,reset) {

   return () => {

    if (galleryContent[1].pos==='mid' || galleryContent[1].pos==='left')
    {
     let temp = galleryContent[1]
     galleryContent[1] = galleryContent[0]
     galleryContent[0]=temp
    }
 
    if (galleryContent[1].pos==='right')
    {
     let temp = galleryContent[2]
     galleryContent[2] = galleryContent[1]
     galleryContent[1] = temp
 
     temp = galleryContent[1]
     galleryContent[1] = galleryContent[0]
     galleryContent[0]=temp
 
    }

   
    setGalleryContent([...galleryContent])
    reset()
   }
  
}

function rightPicture(galleryContent, setGalleryContent, reset) {

    return ()=>{
    if (galleryContent[1].pos ==='mid' || galleryContent[1].pos==='right')
    {
     let temp = galleryContent[1]
     galleryContent[1] = galleryContent[2]
     galleryContent[2]=temp
    }
 
    if (galleryContent[1].pos ==='left')
    {
        let temp = galleryContent[1]
        galleryContent[1] = galleryContent[0]
        galleryContent[0]=temp

        temp = galleryContent[1]
        galleryContent[1] = galleryContent[2]
        galleryContent[2]=temp
    }
    setGalleryContent([...galleryContent])
    reset()
    }
 }


function Photogallery() {

let [galleryContent, setGalleryContent] = useState([{pos:'left',...PhotoType[0]},{pos:'mid',...PhotoType[1]}, {pos:'right',...PhotoType[2]}])

let {index:currPhoto,increaseIndex:nextPhoto, decreaseIndex:prevPhoto, reset} = useIndex()
  
const {state:showDesc, handleToggle:handleToggleShowDesc} = useToggle()

let leftPictureSelect = leftPicture(galleryContent, setGalleryContent,reset)
let rightPictureSelect = rightPicture(galleryContent, setGalleryContent,reset)


  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
    <div style={{display:'flex', justifyContent:'center', gap:'1.5rem'}}>
    <SampleImage galleryContent={galleryContent[0].photoset[0]}
    title={galleryContent[0].title}
    desc={galleryContent[0].desc}
     onClick={leftPictureSelect}></SampleImage>

    {/*Image Element*/}
    <div style={{width:'15rem',
     height:'10rem',
    backgroundImage:`url(${galleryContent[1].photoset[currPhoto]})`,
    backgroundSize:'cover',
    borderRadius:'1rem',
    display:'flex',
    alignItems:'flex-end',
    fontSize:'0.7rem',
    marginTop:'2rem'
    }}>
    <div style={{color:'#FFFFFF', 
    backgroundColor: 'rgb(0 0 0 / 0.3)',  
    backdropFilter: 'blur(1px)',
    padding:'0.1rem 0.5rem', 
    borderBottomLeftRadius:'1rem',
    borderBottomRightRadius:'1rem',
    width:'100%',
    transition:'all 1s'}}>
    <div style={{display:'flex', width:'100%', justifyContent:'space-between', alignItems:'center'}}>
    <h3 style={{margin:'0'}}>{galleryContent[1].title}</h3>
    <p style={{color:'#FFFFFF'}}><FontAwesomeIcon icon={showDesc?faChevronDown:faChevronUp}
    onClick={handleToggleShowDesc}></FontAwesomeIcon></p>
    </div>
    {showDesc && <p style={{margin:'0', padding:'0 0 0.9rem 0'}}>{galleryContent[1].desc}</p>}
    </div>
    </div>

    <SampleImage galleryContent={galleryContent[2].photoset[0]} 
     title={galleryContent[2].title}
     desc={galleryContent[2].desc}
    onClick={rightPictureSelect}></SampleImage>
    </div>
    {/*Image Toggle Elements*/}
    <div style={{display:'flex', gap:'0.5rem',alignItems:'center', margin:'1rem'}}>
    <Button onClick={prevPhoto}><FontAwesomeIcon icon={faChevronCircleLeft} style={{fontSize:'1.5rem'}}></FontAwesomeIcon></Button>
    <div style={{width:"0.3rem", height:"0.3rem", borderRadius:'50%', backgroundColor:'rgba(0, 0, 0, 0.5)'}}></div>
    <div style={{width:"0.3rem", height:"0.3rem", borderRadius:'50%', backgroundColor:'rgba(0, 0, 0, 0.5)'}}></div>
    <div style={{width:"0.3rem", height:"0.3rem", borderRadius:'50%', backgroundColor:'rgba(0, 0, 0, 0.5)'}}></div>
    <div style={{width:"0.3rem", height:"0.3rem", borderRadius:'50%', backgroundColor:'rgba(0, 0, 0, 0.5)'}}></div>
    <div style={{width:"0.3rem", height:"0.3rem", borderRadius:'50%', backgroundColor:'rgba(0, 0, 0, 0.5)'}}></div>
    <Button onClick={()=>{nextPhoto(galleryContent[1].photoset.length-1)}}><FontAwesomeIcon icon={faChevronCircleRight} style={{fontSize:'1.5rem'}}></FontAwesomeIcon></Button>
    </div>

    </div>
  )
}

function SampleImage({galleryContent, onClick=()=>{},title,desc}) {

    const {state:showDesc, handleToggle:handleToggleShowDesc} = useToggle()

    return (<div style={{width:'10rem',
    height:'6.5rem',
   backgroundImage:`url(${galleryContent})`,
   backgroundSize:'cover',
   borderRadius:'1rem',
   display:'flex',
   alignItems:'flex-end',
   fontSize:'0.4rem',
   alignSelf:'flex-start'
   }}
   onClick={onClick}>
   <div style={{color:'#FFFFFF', 
   backgroundColor: 'rgb(0 0 0 / 0.3)',  
   backdropFilter: 'blur(1px)',
   padding:'0.1rem 0.5rem', 
   borderBottomLeftRadius:'1rem',
   borderBottomRightRadius:'1rem',
   width:'100%',
   transition:'all 1s'}}>
   <div style={{display:'flex', width:'100%', justifyContent:'space-between', alignItems:'center'}}>
   <h3 style={{margin:'0'}}>{title}</h3>
   <p style={{color:'#FFFFFF'}}><FontAwesomeIcon icon={showDesc?faChevronDown:faChevronUp}
   onClick={handleToggleShowDesc}></FontAwesomeIcon></p>
   </div>
   {showDesc && <p style={{margin:'0', padding:'0 0 0.9rem 0'}}>{desc}</p>}
   </div>
   </div>)
}

export default Photogallery