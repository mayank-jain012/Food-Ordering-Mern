import React from 'react'
import './subheading.css';
import {assets} from '../../assets/assets'
const Subheading =({title})=>{
    return(
        <div style={{marginBottom:'1rem'}}>
      <p className='p__cormorant'>{title}</p>
      <img src={assets.spoon} alt='subheading' className='spoon__img'/>
      
    </div>
    )
}
export default Subheading