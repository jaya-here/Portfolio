import React from 'react'
import styled from 'styled-components'

const H4 = styled.h4`
font-family: 'Nunito Sans', sans-serif;
font-weight: 800;
text-align:center;
font-size:1.5rem;
`

function Heading({children}) {
  return (
    <H4>{children}</H4>
  )
}

export default Heading