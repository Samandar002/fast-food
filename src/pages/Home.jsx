import React from 'react'
import banner from '../assets/food.jpeg';
import {Link} from 'react-router-dom';
import '../styles/Home.css'

 function Home() {
  return (
    <div className='home' style={{ backgroundImage:`url(${banner})`}}>
       <div className='headerContainer'>
            <h1>
                Food Corner
            </h1>
<p>UZB FOOD AT A CLIKC.</p>
    <Link to='/contact'>
            <button>Order Now</button>
    </Link>
       </div>
    </div>
  )
}

export default Home;