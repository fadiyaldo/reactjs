import { Search, ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;

`
const Wrapper = styled.div`
padding : 20px 20px;
display : flex;
justify-content: space-between;
align-items: center;
`
const Left= styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.span`
border: 1px solid black;
display: flex;
align-items: center ;
margin: 0px 0px 0px 10px;
`
const Input = styled.input`
border: none;
`
const Center = styled.div`
flex: 1;
`
const Logo= styled.div`
font-size:20px;
text-align: center;

`
const Right = styled.div`
flex: 1;
display: flex;
justify-content: right;
align-items: center ;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 20px;
align-items: center ;
`

export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input></Input>
                    <Search style={{color:"gray", fontSize:16}}></Search>
                    
                </SearchContainer>
            </Left>
            <Center><Logo>CS 2999</Logo></Center>
            <Right>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>RIGISTER</MenuItem>
              <MenuItem>
              <Badge badgeContent={5} color="primary">
              <ShoppingCart></ShoppingCart>

              </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar