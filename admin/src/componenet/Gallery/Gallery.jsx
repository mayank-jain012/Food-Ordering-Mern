import React from "react";
import './gallery.css';
import Subheading from "../SubHeading/Subheading";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { assets } from "../../assets/assets";
const Gallery = () => {
    const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

return (
    <div className="app__gallery flex__center">
        <div className="app__gallery-content">
            <Subheading title="Instagram" />
            <h1 className="headtext__cormorant">Photo Gallery</h1>
            <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
            Indulge your senses with a tantalizing visual feast in our captivating photo gallery.</p>
            
        </div>
        <div className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
                {[assets.gallery01, assets.gallery02, assets.gallery03, assets.gallery04].map((image, index) => (
                    <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                        <img src={image} alt="gallery_image" />
                        <BsInstagram className="gallery__image-icon" />
                    </div>
                ))}
            </div>
            <div className="app__gallery-images_arrows">
                <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
            </div>
        </div>
    </div>
);
}
export default Gallery