import React from "react";
import './introduction.css'
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs';
import {assets} from '../../assets/assets'
const Introduction =()=>{
    const vidref = React.useRef();
    const [playvideo, setPlayvideo] = React.useState(false);
    const handlevideo=()=>{
        setPlayvideo((prevPlayVideo)=>!prevPlayVideo)
        if(playvideo){
          vidref.current.pause();
        }
        else{
          vidref.current.play();
        }
    }
    return(
        <div className='app__video'>
      <video
        src={assets.meal}
        loop
        ref={vidref}
        type="video/mp4"
        controls='false'
        muted='false'
      />
      <div className='app__video-overlay flex__center'>
        <div className='flex__center app__video-overlay_circle' onClick={handlevideo}>
          {
            playvideo
              ? (
                <BsPauseFill color="fff" fontSize="30px" />
              ) : <BsFillPlayFill color='fff' fontSize="30px" />
          }
        </div>
      </div>
    </div>
    )
}
export default Introduction