import React from 'react'
import './contact.css'
import Subheading from '../SubHeading/Subheading'
import {assets} from '../../assets/assets'
const Contact =()=>{
    return (
        <div className='app__findus section__padding' id='contact'>
          <div className='app__findus-content'>
            <Subheading title="Contact" />
            <h1 className='headtext__cormorant'>Find Us</h1>
            <p className='p__opensans'>Have a question or feedback? Reach out to us anytime – we're here to help!.</p>
            <div className='app__findus-time'>
              <h4 className='headtext__cormorant' style={{fontSize:'30px'}}>Opening Hours</h4>
              <p className='app__findus-p1'>Mon-Fri:10:00am-02:00am</p>
              <p className='app__findus-p2'>Sat-Sun:10:00am-03:00am</p>
              <button className='custom__button' type='button'>Visit us</button>
            </div>
          </div>
          <div className='app__findus-image'>
            <img src={assets.findus}/>
          </div>
        </div>
      )
}
export default Contact