
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container= styled.div `
width: 100%;
height: 100vh;
display: flex;
position: relative;
background-color: gray;
`
const Arrow = styled.div`
width: 50px;
height:50px;
border-radius: 50%;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
right: ${(props)=> props.direction === "right" && "10px"};
left: ${(props)=> props.direction === "left" && "10px"};
cursor: pointer;
`
const Wrapper= styled.div`
width: 100%;
`
const Slide= styled.div`
display: flex;
align-items:center;
`
const ImgContainer= styled.div`
flex:1;
`
const InfoContainer= styled.div`
flex:1;
`
const Slider = () => {
  return (
   <Container>
    <Arrow direction="left">
    <KeyboardArrowLeft></KeyboardArrowLeft>
    </Arrow>
    <Arrow direction="right">
    <KeyboardArrowRight></KeyboardArrowRight>
    </Arrow>
   </Container>
  )
}

export default Slider