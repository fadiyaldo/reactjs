import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../Data';
import Product from './Product';
const Container= styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
`
//this goes over every product
const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product  item={item} key = {item.id}/>
        ))}
    </Container>
  )
}

export default Products
