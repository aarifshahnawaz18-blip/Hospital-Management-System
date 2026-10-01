import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-us-container">
    <div className="about-us-content">
      <div className="about-us-image">
        <img
          src="AboutUs (1).png" // Replace with your image
          alt="Team Collaboration"
        />
      </div>
      <div className="about-us-text">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="brand-name">City Hijama</span>Located in the heart of Nagpur, City Hijama Center has been a pioneer in providing authentic and professional Hijama treatments since its establishment in 2016. As the first Hijama center in Nagpur, we have proudly introduced this ancient yet highly effective therapeutic practice to the local community. At City Hijama Center, our mission is to combine the timeless wisdom of traditional medicine with modern techniques to ensure safe, hygienic, and effective treatments. We are equipped with state-of-the-art facilities and a team of skilled practitioners dedicated to helping our clients achieve optimal health and well-being. Over the years, we have earned the trust of countless patients, making us a reputable name in the field of holistic healing. Whether you seek relief from chronic pain, detoxification, or simply a rejuvenating experience, City Hijama Center provides personalized care to meet your health goals.



        </p>
        <p>
        Hijama, also known as cupping therapy, is an ancient practice rooted in traditional medicine that has been used for centuries to promote healing and overall well-being. The process involves creating a suction effect on the skin using specialized cups, which helps to remove toxins, improve blood circulation, and restore the body’s natural balance. Hijama therapy is renowned for its ability to alleviate a wide range of ailments, including headaches, migraines, joint pain, muscle stiffness, fatigue, and digestive disorders. It is also known to enhance the immune system, reduce stress, and promote relaxation. This holistic treatment works by stimulating the body’s natural healing processes, making it an effective and non-invasive alternative to conventional medicine.


        </p>
      </div>
    </div>
  </div>
 
 <Footer
 />
 </>
  )

}

export default AboutUs

