import React from "react";
import './awards.css'
import Subheading from '../SubHeading/Subheading';
import { assets,awards } from "../../assets/assets";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
const Awards =()=>{
return(
    <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <Subheading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={assets.laurels} alt="laurels_img" />
    </div>
  </div>
)
}
export default Awards