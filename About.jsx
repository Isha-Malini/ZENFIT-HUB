import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about-Img.png'  // make sure the image is inside src/assets

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
        <img src={aboutImg} alt="About FITVIBE" />
      </div>

      <div className="about-text">
        <span>
          <div className="about-line" />
          <h5>About Us</h5>
        </span>
        <h3> Where Strength Meets Flexibility </h3>
        <p>Welcome to ZENFIT HUB, where you can improve your fitness journey.
            It empower individuals to build healthier lifestyles by making fitness.
            It act as not just about exercising,about overall health guidance.
            It enhances focus ,memory ,confidence and helps to prevent your  lifestyles.
            Its strengthens your muscles and bones to increases energy and stamina.
        </p>
      </div>

    </div>
  )
}

export default About