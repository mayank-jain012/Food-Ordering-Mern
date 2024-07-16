import React from 'react';
import './cheif.css';
import Subheading from '../SubHeading/Subheading'
import { assets } from '../../assets/assets'
const Cheif = () => {
  return (
    <div className='app__bg section__padding app__wrapper'>
      <div className=' app__wrapper_img app__wrapper_img-reverse'>
        <img src={assets.chef} alt='chef' />
      </div>
      <div className='app__wrapper_info'>
        <Subheading title="Chef's World" />
        <h1 className='headtext__cormorant'>What We Beleive In</h1>
        <div className='app__cheif-content'>
          <div className='app__chef-quotes'>
            <img src={assets.quote} />
            <p className='p__opensans'>
              <li className='listing'>
              At GERICHT, our team of skilled chefs are the heart and soul behind every dish. 
              With a passion for culinary excellence and a commitment to quality ingredients, they craft each recipe with 
              creativity and precision, ensuring a symphony of flavors in every bite.
              </li>
              <li className='listing'>

              
              From traditional favorites to innovative creations, our chefs draw inspiration from global cuisines to delight your 
              palate and elevate your dining experience. With their expertise and dedication, they transform ordinary meals into
               extraordinary culinary adventures, inviting you to savor the magic of food at its finest 
               </li>
               </p>
          </div>
        </div>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={assets.sign} alt='sign' />

        </div>


      </div>
    </div>
  )
}

export default Cheif