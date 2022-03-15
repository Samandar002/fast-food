import React from 'react'
import '../styles/About.css';
import AboutImg from '../assets/masala.jpg'

function About() {
  return (
    <div className='about'>
  <div className='aboutTop' style={{backgroundImage: `url(${AboutImg})`}}>

  </div>
  <div className='aboutBottom'>
      <h1>About Us</h1>
     <p>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eius reiciendis esse voluptates 
          explicabo quo, numquam quis aliquam corrupti
           eos animi velit delectus eligendi, repellat, au
           t minus deleniti laudantium eaque voluptatibus!
           explicabo quo, numquam quis aliquam corrupti
           eos animi velit delectus eligendi, repellat, au
           t minus deleniti laudantium eaque voluptatibus!
           explicabo quo, numquam quis aliquam corrupti
           eos animi velit delectus eligendi, repellat, au
           t minus deleniti laudantium eaque voluptatibus!
           explicabo quo, numquam quis aliquam corrupti
           eos animi velit delectus eligendi, repellat, au
           t minus deleniti laudantium eaque voluptatibus!</p>
  </div>
    </div>
  )
}

export default About