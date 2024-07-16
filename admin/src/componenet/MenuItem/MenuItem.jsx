import React from "react";
import './menuitem.css';
const MenuItem = ({ title, tags, price }) => {
  return (
    <div className='app__menuitem'>
      <div className='app__menuitem-head '>
        <div className='app__menuitem-name'>
          <p className='p__cormorant' style={{ color: '#f5cd79' }}>{title}</p>
        </div>
        <div className='app__menuitem-dash' />
        <div className='app__menuitem-price'>
          <p className='p__cormorant' >{price}</p>
        </div>

      </div>

      <div className='app__menuitem-sub'>
        <p className='p__opensans' style={{ color: '#a5b1c2' }} >{tags}</p>
      </div>
    </div>

  )
}

export default MenuItem