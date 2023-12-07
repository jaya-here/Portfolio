import React from 'react'
import styled from 'styled-components'
import { faLocationArrow, faMailBulk, faMobile} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProfileContent.css'

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(1, 1fr);
padding: 0 4rem;
margin-top:1rem;
`
const ContactGrid = styled.div`
display:grid;
grid-template-columns: 2rem 1fr;
grid-template-rows: repeat(4,fr);
align-items:center;
grid-column-gap:0.5rem;
grid-row-gap:0.2rem;
justify-self: flex-start;
`

const Skills = styled.div`
  justify-self:flex-end;
`

const Icon = {
  fontSize: '1.25rem',
  
}

const Text = {
  placeSelf:'flex-start'
}

function ProfileContent() {
  return (
        <Grid>
          <div>
          <h4 className='text-gray-900 text-2xl font-bold'>Contact</h4>
          <ContactGrid>
          <FontAwesomeIcon icon={faLocationArrow}
          style={Icon}
          className='text-purple-600'></FontAwesomeIcon>
          <p style={Text} className='underline-look'> Chennai 600023 </p>
          <FontAwesomeIcon icon={faMailBulk}
          style={Icon}
          className='text-purple-600'></FontAwesomeIcon>
          
          <p style={Text} className='underline-look'> jayaashree.sampathkumar@gmail.com</p>
          <FontAwesomeIcon icon={faMobile}
          style={Icon}
          className='text-purple-600'></FontAwesomeIcon>
          <p style={Text} className='underline-look'> 9962913035 </p>
          <FontAwesomeIcon icon={faMobile}
          style={{...Icon, alignSelf:'flex-start', transform:'translateY(0.3rem)'}}
          className='text-purple-600'></FontAwesomeIcon>
          <p style={Text} className='underline-look'>https://www.linkedin.com/in/jayaashree-sampath-kumarb4aa05236/</p> 
          </ContactGrid>
          </div>
          <Skills>
          <h4 className='text-gray-900 text-2xl font-bold'>Skills</h4>
            <ul>
              <li className='underline-look'>HTML/CSS</li>
              <li className='underline-look'>Javascript</li>
              <li className='underline-look'>React</li>
              <li className='underline-look'>Jest, RTL</li>
            </ul>
          </Skills>
        </Grid>
  )
}

export default ProfileContent


