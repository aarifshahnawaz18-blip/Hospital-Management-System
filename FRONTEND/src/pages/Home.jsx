import React from 'react'
import Hero from '../component/Hero'
import Biography from '../component/Biography'
import Message from '../component/message'
import Disease from '../component/Disease'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'
import HomeAppoint from '../component/HomeAppoint'
const Home = () => {
  return (
    <>

    <Navbar
    />
    <Hero
    title={"Welcome To City Hijama Center Nagpur"}
    imageUrl={"Hero.png"}
    />

    <Biography 
    imageUrl={"AboutUs (1).png"}
    />

<Disease       
    />

    <HomeAppoint 
    />
    
    <Message  />
   
    <Footer
    />
    
    </>
  )
}

export default Home