import React,{useRef,useEffect} from 'react'
import { gsap } from "gsap";

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "../portfolio/PortfolioHeader.css"


function PortfolioHeader() {
     const PortEmptyLeftRef=useRef();
     const PortEmptyRightRef=useRef();
     gsap.registerPlugin(ScrollTrigger);

     

     useEffect(() => {

        
        gsap.fromTo(PortEmptyLeftRef.current,  {
            scaleX:0
            },
            {
           
             scaleX:1,
             transformOrigin: "left right",
             duration:0.7,
             scrollTrigger:{
                 
                 trigger:".portfolio-container",
                 start:" 75% 20% ",
                 end:"50% 90%",
                //  markers:true
             }
            
            
            
            });



            gsap.fromTo(PortEmptyRightRef.current,  {
            
                
               
                scaleX:0,
               
            },
            {
            
           
            scaleX:1,
           
             duration:0.7,
             transformOrigin: "0 0",
            
             scrollTrigger:{
                
                 trigger:".portfolio-container",
                 start:" 75% 20% ",
                 end:"50% 90%",
                 
                 
                //  markers:true
             }
            
            
            
            });
      },[]);



  return (
    <div className='portfolioHeader-container' id="portfolioHeader-id">
        <div className='portfolioHeader'>
            <div className='portfolioHeader-empty left' ref={PortEmptyLeftRef} > </div>
            <div className='portfolioHeader-heading'> <h4>Portfolio of our works</h4></div>
            <div className='portfolioHeader-empty right'  ref={PortEmptyRightRef} id="portfolioHeader-empty-right"> </div>     
        </div>

        <div className='portfolioHeader-text'>
            <p className='portfolioHeader-text-para'> 
                Cras nam in blandit tellus. 
                Vel in morbi ipsum erat vestibulum donec enim sagittis. 
                Aenean eu in suscipit elementum vestibulum pulvinar commodo semper phasellus.
            </p>
        </div>

    </div>
  )
}

export default PortfolioHeader