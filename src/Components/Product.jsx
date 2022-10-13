import React from 'react'
import styled from 'styled-components';

const Container= styled.div`
flex:1;
margin: 5px;
height: 50vh;

`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;

`
const Info = styled.div`

`
const Button = styled.button`
`

const Product = ({item}) => {

  return (
    <Container>
        <Image src = {item.img}/>
        <Info>
          <Button>shop now</Button>
      </Info>
    </Container>
  )
}

export default Product