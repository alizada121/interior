import React from 'react';
import SliderText from "../slider-page/SliderText"
import Slider from './Slider';

import "./SliderPage.css"

function SliderPage() {
  return (
    <div className='sliderPage-container'>
            <div className='sliderPage'>
                <SliderText/>
                <Slider/>
            </div>
    </div>
  )
}

export default SliderPage