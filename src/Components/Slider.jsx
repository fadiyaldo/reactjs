
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
height: 100%;
display: flex;
`
const Slide= styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items:center;
`
const ImgContainer= styled.div`
height: 100%;
flex:1;
`
const Image = styled.img`
height: 100%;
`
const InfoContainer= styled.div`
flex:1;
padding: 50px;
`
const Title= styled.h1`
font-size: 60px;

`
const Paragraph = styled.p`
margin: 50px 0px;
font-size: 20px;
letter-spacing: 2px;
`
const Button = styled.button`
padding: 10px;
background: none;
`
const Slider = () => {
  return (
   <Container>
    <Arrow direction="left">
    <KeyboardArrowLeft></KeyboardArrowLeft>
    </Arrow>
    <Wrapper>
    <Slide>
      <ImgContainer>
      <Image src="https://www.bing.com/images/search?view=detailV2&ccid=kpLcPw6I&id=9D8F1DDBDDF9FE525F38B1082FC7BBEE902DA89F&thid=OIP.kpLcPw6I7B6IGs3qGMrhFAHaHa&mediaurl=https%3A%2F%2Fwww.boutiqueretailer.com.au%2Fassets%2Ffull%2F65642-BRBK.jpg%3F20200628212758&exph=1600&expw=1600&q=men+shoes&simid=607988995310956152&form=IRPRST&ck=532C545B5F88A6D7596654D630695D6D&selectedindex=40&ajaxhist=0&ajaxserp=0&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.9292dc3f0e88ec1e881acdea18cae114%3Frik%3Dn6gtkO67xy8IsQ%26pid%3DImgRaw%26r%3D0&vt=0&sim=11"></Image>
      </ImgContainer>
      <InfoContainer>
        <Title>WELCOME TO OUR WEBSITE</Title>
        <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, maiores fuga est placeat doloribus, incidunt dolor sint mollitia voluptatem corporis pariatur! Totam eos odit autem. Perferendis ut quaerat cumque atque?
        </Paragraph>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Slide>
    <Slide>
      <ImgContainer>
      <Image src="https://www.bing.com/images/search?view=detailV2&ccid=kpLcPw6I&id=9D8F1DDBDDF9FE525F38B1082FC7BBEE902DA89F&thid=OIP.kpLcPw6I7B6IGs3qGMrhFAHaHa&mediaurl=https%3A%2F%2Fwww.boutiqueretailer.com.au%2Fassets%2Ffull%2F65642-BRBK.jpg%3F20200628212758&exph=1600&expw=1600&q=men+shoes&simid=607988995310956152&form=IRPRST&ck=532C545B5F88A6D7596654D630695D6D&selectedindex=40&ajaxhist=0&ajaxserp=0&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.9292dc3f0e88ec1e881acdea18cae114%3Frik%3Dn6gtkO67xy8IsQ%26pid%3DImgRaw%26r%3D0&vt=0&sim=11"></Image>
      </ImgContainer>
      <InfoContainer>
        <Title>WELCOME TO OUR WEBSITE</Title>
        <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, maiores fuga est placeat doloribus, incidunt dolor sint mollitia voluptatem corporis pariatur! Totam eos odit autem. Perferendis ut quaerat cumque atque?
        </Paragraph>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Slide>
    <Slide>
      <ImgContainer>
      <Image src="https://www.bing.com/images/search?view=detailV2&ccid=kpLcPw6I&id=9D8F1DDBDDF9FE525F38B1082FC7BBEE902DA89F&thid=OIP.kpLcPw6I7B6IGs3qGMrhFAHaHa&mediaurl=https%3A%2F%2Fwww.boutiqueretailer.com.au%2Fassets%2Ffull%2F65642-BRBK.jpg%3F20200628212758&exph=1600&expw=1600&q=men+shoes&simid=607988995310956152&form=IRPRST&ck=532C545B5F88A6D7596654D630695D6D&selectedindex=40&ajaxhist=0&ajaxserp=0&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.9292dc3f0e88ec1e881acdea18cae114%3Frik%3Dn6gtkO67xy8IsQ%26pid%3DImgRaw%26r%3D0&vt=0&sim=11"></Image>
      </ImgContainer>
      <InfoContainer>
        <Title>WELCOME TO OUR WEBSITE</Title>
        <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, maiores fuga est placeat doloribus, incidunt dolor sint mollitia voluptatem corporis pariatur! Totam eos odit autem. Perferendis ut quaerat cumque atque?
        </Paragraph>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Slide>
    </Wrapper>
    <Arrow direction="right">
    <KeyboardArrowRight></KeyboardArrowRight>
    </Arrow>
   </Container>
  )
}

export default Slider