import React from 'react'
import styled from 'styled-components'
import {faCamera, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

let users, name, rating, totalUsers

const FlexSide = styled.div`
display:flex;
background-color:#FFF9EA;
border-radius: 1rem;
height:25rem;
`

const FlexGrow = styled.div`
flex:0 0 50%;
`
const ImgHW = styled.img`
width:100%;
height:100%;
border-top-right-radius: 1rem;
border-bottom-right-radius: 1rem;
`
const ImgMin = styled.img`
width:4.5rem;
height:7rem;
`

const ContentFlex = styled.div`
display:flex;
flex-direction: column;
padding: 1rem;
padding-bottom: 3rem;
font-size:0.9rem;
`
const PhotoSlideOutline = styled.div`
position:absolute;
bottom:0;
left:0;
background-color:#000000;
color:#FFFFFF;
display:flex;
gap:0.3rem;
border-bottom-left-radius:1rem;
border-top-right-radius:1rem;
padding:0.3rem 0.5rem;
width:30%;
justify-content: space-around;
`
const ControlFlex = styled.div`
display:flex;
width:100%;
left:0;
bottom:0;
justify-content:center;
position:absolute;
`

const ControlButton = styled.button`
outline:none;
appearance:none;
background-color:#FFC700;
margin:0;
padding:0;
color:#FFFFFF;
&:hover{
    outline:none;
    appearance:none;
}
&:focus{
    outline:none;
    appearance:none;
}
`
const ButtonFlex = styled.div`
display:flex;
background-color:#FFC700;
box-shadow:0.15rem 0.15rem 0.1rem #FFC700, -0.10rem -0.10rem 0.1rem #FFC700;
color:#FFFFFF;
gap:0.5rem;
padding:0.35rem 0.5rem;
border-radius:0.6rem;
justify-content:space-evenly;`

const Showall = styled.button`
    outline:none;
    appearance:none;
    background-color:#FFFFFF;
    color:#000000;
    padding:0.2rem 0.4rem;
    position:absolute;
    font-size:.5rem;
    font-weight:700;
    top:1rem;
    right:1rem;
`
const PhotoSlide1Outline = styled.div`
    display:flex;
    background-color:#FFFFFF;
    gap:1px;
    position:absolute;
    bottom:0;
    right:0;
    border:1px solid #FFFFFF;
    justify-content:flex-end;
    z-index:10;
`



export default function Card(
    {UserReviews,
    user, 
    nextUser, 
    prevUser, 
    totalUser}
) {
  
  name = UserReviews[user].name
  rating = UserReviews[user].rating
  users = user
  totalUsers = totalUser

  return (
    <FlexSide style={{position:'relative'}}>
        <FlexGrow>
        <Content></Content>
        </FlexGrow>
        <FlexGrow>
        <ImgHW src={UserReviews[user].image[0]}></ImgHW>
        <PhotoSlide1Outline></PhotoSlide1Outline>
        </FlexGrow>
        <ControlButtonItem 
        nextUser={nextUser}
        prevUser={prevUser}
        ></ControlButtonItem>
        <ShowAllButton></ShowAllButton>
        <UpcomingPhotos Imgarr={UserReviews[user].image}></UpcomingPhotos>
    </FlexSide>
  )
}


function Content() {
    return (
        <ContentFlex >
        <div style={{fontWeight:'600'}}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra porttitor tincidunt. Aenean nec tristique eros. Suspendisse convallis vestibulum lorem, sit amet vestibulum enim aliquam at. Sed tristique est quis erat facilisis euismod. In sem ipsum, suscipit non consectetur nec, porttitor vitae ex. Ut nisl nunc, sodales et tellus eu, pulvinar euismod ligula. Vestibulum est ante, ultrices vel hendrerit ac, consectetur euismod ante. Suspendisse gravida nisl nec leo mollis posuere.
         </div>
         <h5 style={{margin:'0.25rem 0', fontWeight:'800'}}>{name}</h5>
         <p style={{margin:'0 0 0.25rem',
         fontSize:'0.7rem',
         fontWeight:'600'}}>{`Rating ${rating}/5`}</p>
        <Photoslide></Photoslide>
        </ContentFlex>
    )
}

function Photoslide() {
    
    return (
     <PhotoSlideOutline>
        <CameraIcon
        additionalStyle={(1<=rating)?{color:'#FFFFFF'}:{color:'grey'}}></CameraIcon>
        <CameraIcon
        additionalStyle={(2<=rating)?{color:'#FFFFFF'}:{color:'grey'}}></CameraIcon>
        <CameraIcon
        additionalStyle={(3<=rating)?{color:'#FFFFFF'}:{color:'grey'}}></CameraIcon>
        <CameraIcon
        additionalStyle={(4<=rating)?{color:'#FFFFFF'}:{color:'grey'}}></CameraIcon>
        <CameraIcon
        additionalStyle={(5<=rating)?{color:'#FFFFFF'}:{color:'grey'}}></CameraIcon>   
     </PhotoSlideOutline>
    )
}

function CameraIcon({additionalStyle={}}) {
    return (
        <FontAwesomeIcon style={{fontSize:'1.1rem', ...additionalStyle }}
         icon={faCamera} />
    )
}

function ControlButtonItem({nextUser, prevUser}) {
    return (
        <ControlFlex>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', transform:'translateY(60%)'}}>
        <ButtonFlex>
            <ControlButton onClick={prevUser}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></ControlButton>
            <div style={{display:'flex', justifyContent:'center', transform:'translateX(0.1rem)'}}>
            <div style={{borderLeft:'1px solid #FFFFFF', width:'0.1rem', height:'90%'}}></div>
            </div>
            <ControlButton onClick={()=>{nextUser(totalUsers)}}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></ControlButton>
        </ButtonFlex>
        <h5 style={{margin:'0.25rem 0'}}>{`${users+1}/${totalUsers+1}`}</h5>
        </div>
        </ControlFlex>
    )
}

function ShowAllButton() {
    return (
        <Showall>Show all</Showall>
    )
}

function UpcomingPhotos({Imgarr}) {

    return (<PhotoSlide1Outline>
        <ImgMin src={Imgarr[1]}></ImgMin>
        <ImgMin src={Imgarr[2]}></ImgMin>
        <ImgMin src={Imgarr[3]}></ImgMin>
    </PhotoSlide1Outline>)

}
