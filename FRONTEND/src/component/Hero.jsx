import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    
    <div className="hero container">
        <div className="banner">
            <h1>{title}</h1>

<p>Welcome to City Hijama Center in Nagpur, the city’s first dedicated cupping therapy center since 2016. Our facility is equipped with modern tools and offers a clean, comfortable space for personalized treatments. Our skilled practitioners ensure a safe, effective experience, focusing on healing, pain relief, and overall wellness through professional cupping therapy sessions tailored to your needs.



</p>






        </div>
        <div className="banner">
            <img src={imageUrl} alt="doctor2-removebg-preview" className="animated-image"/>
             <span>
                <img src=""/>
             </span>
        </div>
    </div>
  
  )
}

export default Hero