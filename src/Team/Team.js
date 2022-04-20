import React, { useRef,useEffect} from 'react'
import { gsap } from "gsap";
import "../Team/Team.css"

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import team1 from "../assets/Team1.png"

import Team4 from '../Team4/Team4';


import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import "swiper/css/pagination";
import { Pagination } from "swiper";


function Team() {

  const team1Ref=useRef();
  const team2Ref=useRef();
  const team3Ref=useRef();
  const team4Ref=useRef();

  const changeTeam1Ref=useRef();
  const changeTeam2Ref=useRef();
  const changeTeam3Ref=useRef();
  const changeTeam4Ref=useRef();


  const TeamEmptyLeftRef=useRef();
  const TeamEmptyRightRef=useRef();

  
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    
    gsap.fromTo(TeamEmptyLeftRef.current,  {
        
      scaleX:0
        },
        {
          scaleX:1,
         duration:0.7,
         transformOrigin: "left right",
         scrollTrigger:{
             
             trigger:".team-container",
             start:" 65% 20% ",
             end:"50% 90%",
            //  markers:true
         }
        
        
        
        });



        gsap.fromTo( TeamEmptyRightRef.current,  {
        
          scaleX:0
        },
        {
          scaleX:1,
         duration:0.7,
         transformOrigin: "0 0",
         scrollTrigger:{
            
             trigger:".team-container",
             start:" 65% 20% ",
             end:"50% 90%",
            //  markers:true
         }
        
        
        
        });
  },[]);
  
  return (


    <div className='team-container' >
        <div className='team-header'>
            <div className='team-empty-left-cont'> <div  ref={TeamEmptyLeftRef} className='team-empty-left' ></div></div>
            <div className='team-heading'><h1>Team</h1></div>
            <div className='team-empty-right-cont'> <div  ref={TeamEmptyRightRef} className='team-empty-right' ></div></div>
        </div>

        <div className='team-slider'>
          <Team4/>

        </div>

       

       

    </div>
  )
}

export default Team