

import React,{useRef,useEffect} from 'react'
import { gsap } from "gsap";

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "../Advantages/Advantages.css"
function Advantages() {
    gsap.registerPlugin(ScrollTrigger);
    const AdvantagesEmptyRef=useRef()

    useEffect(() => {

        
       


            gsap.fromTo(AdvantagesEmptyRef.current,  {
            
                scaleX:0
            },
            {
                scaleX:1,
             duration:0.7,
             transformOrigin: "0 0",
             scrollTrigger:{
                
                 trigger:".advantages-container",
                 start:"60% 70% ",
                 end:"80% 70%",
                //  markers:true 
             }
            
            
            
            });
      },[]);

  return (
    <div className='advantages-container'>

        <div className='advantages-header'>
            <div className='advantages-heading'>
                <h2>Our advantages</h2>
            </div>

            <div className='advantages-header-empty' ref={AdvantagesEmptyRef}></div>
        </div>

        <div className='advantages-texts'>
            <div className='advantages-text'>
                <h2>01</h2>
                <h5>Direct communication with clients</h5>
                <p>In ipsum at mi magna lorem massa. Risus viverra faucibus mauris integer augue semper vestibulum. Sit praesent</p>
            </div>

            <div className='advantages-text'>
                <h2>02</h2>
                <h5>Own team</h5>
                <p>
                   Eu vitae consequat, vehicula consectetur vitae nec et integer scelerisque.
                   Quis viverra malesuada vestibul nam. Natoque nisi volutpat 
                </p>

            </div>

            <div className='advantages-text'>
                <h2>03</h2>
                <h5>Control of all processes</h5>
                <p>
                    Mi elit, est non viverra dui ut enim. Dolor dolor odio quam sit ullamcorper nec feugiat
                </p>
            </div>

        </div>

    </div>
  )
}

export default Advantages