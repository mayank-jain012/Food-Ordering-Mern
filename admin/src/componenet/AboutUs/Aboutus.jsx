import React from "react";
import './aboutus.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import { assets } from "../../assets/assets";
const Aboutus = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='aboutus'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={assets.G} alt='aboutus' />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'> About Us </h1>
          <img src={assets.spoon} alt='spoon' className='spoon__image' />
          <p className='p__opensans'>
            At GERICHT, we're passionate about connecting people with great food experiences.
            Our journey began with a simple idea: to make ordering food online easy, convenient, and enjoyable for everyone</p>
          {/* <Button label="Know More" icon="pi pi-external-link" onClick={() => setVisible(true)} className="custom__button" /> */}
          <button className="custom__button" onClick={()=>setVisible(true)}>Know More</button>
          <Dialog header="About us" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
            <p className="m-0">
              
                <li className="listing">
                  At GERICHT, we're passionate about connecting people with great food experiences.
                  Our journey began with a simple idea: to make ordering food online easy, convenient, and enjoyable for everyone.
                  <br />
                </li>
                <li className="listing">
                  Driven by a love for delicious cuisine and a commitment to exceptional service, we've curated a diverse selection '
                  of eateries and dishes to cater to every palate and preference. Whether you're craving comfort food classics, exploring
                  exotic flavors, or seeking healthier options, we've got you covered.
                  <br />
                </li>
                <li className="listing">
                  Our team is dedicated to ensuring a seamless ordering process from start to finish, with user-friendly interfaces,
                  secure transactions, and prompt delivery services. Join us in celebrating the joy of food, one order at a time
                  <br/>
                </li>
             


            </p>
          </Dialog>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
          <img src={assets.knife} alt='knife' />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'> Our history </h1>
          <img src={assets.spoon} alt='spoon' className='spoon__image' />
          <p className='p__opensans'>
            Embark on a journey through the history of GERICHT. Founded in 2022, our story began with a vision to
            revolutionize the way people experience food. Join us as we continue to write the next chapter in our
              delicious journey together.</p>
          {/* <Button label="Know More" icon="pi pi-external-link" onClick={() => setVisible1(true)} className="custom__button" /> */}
          <button className="custom__button" onClick={()=>setVisible1(true)}>Know More</button>
          <Dialog header="Our History" visible={visible1} maximizable style={{ width: '50vw' }} onHide={() => { if (!visible1) return; setVisible1(false); }}>
            <p className="m-0">
              <li className="listing">
              Embark on a journey through the history of GERICHT. Founded in 2022, our story began with a vision
              to revolutionize the way people experience food. What started as a humble startup in Delhi has since evolved into a
              trusted platform, serving hungry customers across India.
              </li>
              <li className="listing">
              From our earliest days, we've been committed to innovation and excellence, constantly refining our technology and expanding our offerings
              to meet the evolving needs of our users. Over the years, we've forged partnerships with renowned restaurants, eateries, and chefs,
              bringing their culinary creations directly to your doorstep.
              </li>
              <li className="listing">
              As we look back on our growth and accomplishments, we're grateful for the support of our loyal customers and dedicated team members
              who have helped shape GERICHT into what it is today. Join us as we continue to write the next chapter in our
              delicious journey together.
              </li>
            </p>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
export default Aboutus