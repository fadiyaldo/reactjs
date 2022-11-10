import React from 'react'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Slider from '../Components/Slider'
import Footer from "../Components/Footer"
import Newsletter from "../Components/Newsletter"

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home