import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner" >
        <img src={imageUrl}  />
      </div>
       <div className="banner">
         <h1>Biography</h1>
         <h3>Who We Are</h3>
<p>Welcome to City Hijama Center, Nagpur’s first dedicated cupping therapy center, established in 2016. Our facility is designed to offer a comfortable, hygienic, and relaxing environment for our clients. Equipped with modern tools and spacious, private treatment rooms, we provide safe and personalized cupping therapy to promote healing, relieve pain, improve circulation, and detoxify the body. Our experienced practitioners take the time to understand your unique health needs, tailoring each session for optimal results. At City Hijama Center, we are committed to enhancing your wellness and providing a holistic approach to health through effective cupping therapy.



</p>
      
       </div>

    </div>
  )
}

export default Biography