import React, {useRef} from 'react'
import slider1 from '../assets/slider1.png'
import slider2 from '../assets/interior-project1.png'
import slider3 from '../assets/interior-project2_ccexpress.png'
import slider4 from '../assets/interior-project3_ccexpress.png'

import "././Slider.css"

function Slider() {

  const sliderRef1=useRef();
  const sliderRef2=useRef();
  const sliderRef3=useRef();
  const sliderRef4=useRef();

  const emptyDivRef1=useRef();
  const emptyDivRef2=useRef();
  const emptyDivRef3=useRef();
  const emptyDivRef4=useRef();



  const sliderClick1= () =>{
      console.log("hello")
      sliderRef1.current.style.opacity="1";
      sliderRef2.current.style.opacity="0";
      sliderRef3.current.style.opacity="0";
      sliderRef4.current.style.opacity="0";

      emptyDivRef1.current.style.borderBottom=" 4px solid #435877"
      emptyDivRef2.current.style.borderBottom=" 4px solid #B4A890"
      emptyDivRef3.current.style.borderBottom="4px solid #B4A890"
      emptyDivRef4.current.style.borderBottom="4px solid #B4A890"
  }

  const sliderClick2= () =>{
    console.log("hello2")
    sliderRef1.current.style.opacity="0";
    sliderRef2.current.style.opacity="1";
    sliderRef3.current.style.opacity="0";
    sliderRef4.current.style.opacity="0";

    emptyDivRef1.current.style.borderBottom="4px solid #B4A890"
    emptyDivRef2.current.style.borderBottom=" 4px solid #435877"
    emptyDivRef3.current.style.borderBottom="4px solid #B4A890"
    emptyDivRef4.current.style.borderBottom="4px solid #B4A890"
   
  }

  const sliderClick3= () =>{
    console.log("hello2")
    sliderRef1.current.style.opacity="0";
    sliderRef2.current.style.opacity="0";
    sliderRef3.current.style.opacity="1";
    sliderRef4.current.style.opacity="0";

    emptyDivRef1.current.style.borderBottom="4px solid #B4A890"
    emptyDivRef2.current.style.borderBottom="4px solid #B4A890"
    emptyDivRef3.current.style.borderBottom=" 4px solid #435877"
    emptyDivRef4.current.style.borderBottom="4px solid #B4A890"
  }

  const sliderClick4= () =>{
    console.log("hello2")
    sliderRef1.current.style.opacity="0";
    sliderRef2.current.style.opacity="0";
    sliderRef3.current.style.opacity="0";
    sliderRef4.current.style.opacity="1";

    emptyDivRef1.current.style.borderBottom="4px solid #B4A890"
    emptyDivRef2.current.style.borderBottom="4px solid #B4A890"
    emptyDivRef3.current.style.borderBottom="4px solid #B4A890"
    emptyDivRef4.current.style.borderBottom=" 4px solid #435877"
  }

  return (
    <div className='slider-general'>
        <div className='slider-container'>
       
    
        <div className='slider'>
          <div className='slider-img'>
            <img src={slider1} ref={sliderRef1} id="default-img"></img>
            <img  src={slider2} ref={sliderRef2}></img>
            <img src={slider3} ref={sliderRef3}></img>
            <img src={slider4} ref={sliderRef4}></img>


            <div className='slider-description'>
            <p className='slider-description-text'>Turpis commodo posuere sed amet </p>
            </div>

            <div className='slider-empty-div-container'>
               <div className='slider-empty-div' onClick={sliderClick1} ref={emptyDivRef1} id="default-line"></div>
               <div className='slider-empty-div' onClick={sliderClick2} ref={emptyDivRef2}></div>
               <div className='slider-empty-div'  onClick={sliderClick3} ref={emptyDivRef3}></div>
               <div className='slider-empty-div'  onClick={sliderClick4} ref={emptyDivRef4}></div>
            </div>

            <div className='order-button-container-mobile'>
                <button className='order-button-mobile' ><p className='order-button-text-mobile'>Order a project</p></button>

                
            </div>


          </div>
            
          

          

        </div>
      </div>
        
    </div>      

   
    
  )
}

export default Slider