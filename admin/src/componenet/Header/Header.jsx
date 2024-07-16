import React from 'react'
import './header.css'
import Subheading from '../SubHeading/Subheading'
import {assets} from '../../assets/assets'
const Header = () => {
  return (
    <div className='app__header section__padding app__wrapper' id='home'>
      <div className='app__wrapper_info'>
    <Subheading title="Chase the new flavor"/>
    <h1>Order Flavorful Dishes with Ease.</h1>
    <p className='p__opensans' style={{margin:'2rem 0'}}>
    Welcome to GERICHT! Discover a world of culinary delights at your fingertips.
     Browse through our extensive menu featuring a tantalizing array of dishes crafted with passion and precision 
     by our talented chefs. With just a few clicks, you can satisfy your cravings and have your favorite meals delivered 
     straight to your doorstep. Join us on a journey of flavor exploration and convenience, where every bite is a moment to savor.</p>
     <a href='#explore-menu' className='custom__button'>
     Explore Menu
     </a>
      
      </div>
      <div className='app__wrapper_img'>
      <img src={assets.welcome} alt='welcomeimage'/>
      </div>
    </div>
  )
}

export default Header
