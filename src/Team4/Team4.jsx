import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import team1 from "../assets/Team1.png"
import "../Team4/team4.css"
// Import Swiper styles
import 'swiper/css';




// import required modules

function Team4() {
  const changable14Ref=useRef(null);
  const button1Ref=useRef();
  const button2Ref=useRef();
  const button3Ref=useRef();
  const button4Ref=useRef();

  const Team1Ref=useRef();
  const Team2Ref=useRef();
  const Team3Ref=useRef();
  const Team4Ref=useRef();
  const Team1TextRef=useRef();

  const imageeeRef=useRef();

  const [height, setHeight] = useState(0)
  const [height4,setHeight4]=useState();
  const [divHeight,setDivHeight]=useState();
  const [div2height,setDiv2height]=useState();

  const [imgHeight,setImgHeight]=useState();

  const [textHeight,setTextHeight]=useState();

  // const ref = useRef(null)

  useEffect(() => {
    setHeight(changable14Ref.current.clientHeight)
    console.log(height)

    setDivHeight(Team1TextRef.current.clientHeight)
    console.log(divHeight)
    

    setImgHeight(imageeeRef.current.clientHeight)
    console.log(imgHeight)

    setTextHeight(Team1TextRef.current.clientHeight)
    console.log(textHeight)

    
    setDiv2height(imgHeight + textHeight)
    console.log(div2height)



    

  //  setHeight4(height/4)
  //  console.log(height4)
  },[height])


  

  

  const click14=()=>{
    gsap.to(changable14Ref.current, { transform:" translate3d(0px, 0px, 0px)",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d(0%, 0%, 0%)",duration:1});
    // changable14Ref.current.style.transform=" translate3d(0px, 0px, 0px)"
    

    // Team1Ref.current.style.marginTop="10%"
    // Team2Ref.current.style.marginTop="0"
    // Team3Ref.current.style.marginTop="0"
    // Team4Ref.current.style.marginTop="0"
    
   

  //  Team1Ref.current.style.marginBottom="0"
   button1Ref.current.style.color="#435877"
   button1Ref.current.style.textDecoration="underline"

   button2Ref.current.style.color="#CCD7E9 "
   button2Ref.current.style.textDecoration="none"

   button3Ref.current.style.color="#CCD7E9 "
   button3Ref.current.style.textDecoration="none"

   button4Ref.current.style.color="#CCD7E9 "
   button4Ref.current.style.textDecoration="none"

   Team1Ref.current.style.opacity="1"
   Team2Ref.current.style.opacity="0"
   Team3Ref.current.style.opacity="0"
   Team4Ref.current.style.opacity="0"
  }
  
  const click24=()=>{
    // gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${height*0.25}px, 0px)` ,duration:1});

    gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${textHeight }px, 0px)` ,duration:1});
    // Team2Ref.current.style.position="absolute"
    // gsap.to(changable14Ref.current, { transform:" translate3d(0px, -440px, 0px)",duration:1});
    // gsap.to(Team1Ref.current, {position:"absolute", duration:1});
    // changable14Ref.current.style.transform=" translate3d(0px, , 0px)"
    
    // Team1Ref.current.style.marginTop="0"
    // Team2Ref.current.style.marginTop="10%"
    // Team3Ref.current.style.marginTop="0"
    // Team4Ref.current.style.marginTop="0"


    button2Ref.current.style.color="#435877"
    button2Ref.current.style.textDecoration="underline"
 
    button1Ref.current.style.color="#CCD7E9 "
    button1Ref.current.style.textDecoration="none"
 
    button3Ref.current.style.color="#CCD7E9 "
    button3Ref.current.style.textDecoration="none"
 
    button4Ref.current.style.color="#CCD7E9 "
    button4Ref.current.style.textDecoration="none"

    Team1Ref.current.style.opacity="0"
    Team2Ref.current.style.opacity="1"
    Team3Ref.current.style.opacity="0"
    Team4Ref.current.style.opacity="0"

  }

  const click34=()=>{
    // gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${ height * 0.5}px, 0px)`,duration:1});
    gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${textHeight * 2}px, 0px)` ,duration:1});

    // Team1Ref.current.style.marginTop="0%"
    // Team2Ref.current.style.marginTop="0"
    // Team3Ref.current.style.marginTop="10%"
    // Team4Ref.current.style.marginTop="0"


    
    // Team3Ref.current.style.marginTop="0"
    // gsap.to(changable14Ref.current, { transform:" translate3d(0px, -890px, 0px)",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d(0, 50%, 0%)",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d('0vh', '200vh', '0vh')",duration:1});
    // changable14Ref.current.style.transform=" translate3d(0px, -920px, 0px)"

    button3Ref.current.style.color="#435877"
    button3Ref.current.style.textDecoration="underline"
 
    button1Ref.current.style.color="#CCD7E9 "
    button1Ref.current.style.textDecoration="none"
 
    button2Ref.current.style.color="#CCD7E9 "
    button2Ref.current.style.textDecoration="none"
 
    button4Ref.current.style.color="#CCD7E9 "
    button4Ref.current.style.textDecoration="none"

    Team1Ref.current.style.opacity="0"
    Team2Ref.current.style.opacity="0"
    Team3Ref.current.style.opacity="1"
    Team4Ref.current.style.opacity="0"
  }

  


  const click44=()=>{
    // gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${ height * 0.75 }px, 0px)`,duration:1});
    gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${textHeight * 3}px, 0px)` ,duration:1});

    // gsap.to(changable14Ref.current, { transform:" translate3d(0px, -1330px, 0px)",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d('0%', '75%', '0%')",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d('0vh', '300vh', '0vh')",duration:1});
    // changable14Ref.current.style.transform=" translate3d(0px, -1380px, 0px)"
    // Team4Ref.current.style.marginTop="0"

    // Team1Ref.current.style.marginTop="0%"
    // Team2Ref.current.style.marginTop="0"
    // Team3Ref.current.style.marginTop="0"
    // Team4Ref.current.style.marginTop="10%"

    button4Ref.current.style.color="#435877"
    button4Ref.current.style.textDecoration="underline"
 
    button1Ref.current.style.color="#CCD7E9 "
    button1Ref.current.style.textDecoration="none"
 
    button3Ref.current.style.color="#CCD7E9 "
    button3Ref.current.style.textDecoration="none"
 
    button2Ref.current.style.color="#CCD7E9 "
    button2Ref.current.style.textDecoration="none"

    Team1Ref.current.style.opacity="0"
    Team2Ref.current.style.opacity="0"
    Team3Ref.current.style.opacity="0"
    Team4Ref.current.style.opacity="1"
      
}

const swiper1mobRef=useRef();
const swiper2mobRef=useRef();
const swiper3mobRef=useRef();
const swiper4mobRef=useRef();


const click14Mob=()=>{
  
  gsap.to(changable14Ref.current, { transform:" translate3d(0px, 0px, 0px)",duration:1});
  Team1Ref.current.style.opacity="1"
  Team2Ref.current.style.opacity="0"
  Team3Ref.current.style.opacity="0"
  Team4Ref.current.style.opacity="0"


 swiper1mobRef.current.style.color="#435877"
 swiper1mobRef.current.style.textDecoration="underline"

 swiper2mobRef.current.style.color="#CCD7E9 "
 swiper2mobRef.current.style.textDecoration="none"

 swiper3mobRef.current.style.color="#CCD7E9 "
 swiper3mobRef.current.style.textDecoration="none"

 swiper4mobRef.current.style.color="#CCD7E9 "
 swiper4mobRef.current.style.textDecoration="none"

  
}

const click24Mob=()=>{
  // gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${height * 0.25}px, 0px)` ,duration:1});
  // gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${div2height }px, 0px)`,duration:1});
  // gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${ height * 0.33 }px, 0px)`,duration:1});

  gsap.to(changable14Ref.current, { transform:` translate3d(0px,-${ textHeight + (textHeight * 0.17) + imgHeight}px, 0px) `,duration:1});



  // Team2Ref.current.style.marginTop="-60%"

  Team1Ref.current.style.opacity="0"
  Team2Ref.current.style.opacity="1"
  Team3Ref.current.style.opacity="0"
  Team4Ref.current.style.opacity="0"

 swiper2mobRef.current.style.color="#435877"
 swiper2mobRef.current.style.textDecoration="underline"

 swiper1mobRef.current.style.color="#CCD7E9 "
 swiper1mobRef.current.style.textDecoration="none"

 swiper3mobRef.current.style.color="#CCD7E9 "
 swiper3mobRef.current.style.textDecoration="none"

 swiper4mobRef.current.style.color="#CCD7E9 "
 swiper4mobRef.current.style.textDecoration="none"


  
}

const click34Mob=()=>{
  // gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${ height * 0.50}px, 0px)`,duration:1});
  // gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${div2height*2 }px, 0px)`,duration:1});
  // gsap.to(changable14Ref.current, { transform:` translate3d(0px, -${ height * 0.66}px, 0px)`,duration:1});
  // gsap.to(changable14Ref.current, { transform:" translate3d(0px, -1332px, 0px)",duration:1});

  // gsap.to(changable14Ref.current, { transform:` translate3d(0px,-${ textHeight + imgHeight}px, 0px) `,duration:1});

  gsap.to(changable14Ref.current, { transform:` translate3d(0px,-${ 2 * (textHeight + (textHeight * 0.1) + imgHeight)}px, 0px) `,duration:1});




  // Team3Ref.current.style.marginTop="-60%"
  
  Team1Ref.current.style.opacity="0"
  Team2Ref.current.style.opacity="0"
  Team3Ref.current.style.opacity="1"
  Team4Ref.current.style.opacity="0"

 swiper3mobRef.current.style.color="#435877"
 swiper3mobRef.current.style.textDecoration="underline"

 swiper1mobRef.current.style.color="#CCD7E9 "
 swiper1mobRef.current.style.textDecoration="none"

 swiper2mobRef.current.style.color="#CCD7E9 "
 swiper2mobRef.current.style.textDecoration="none"

 swiper4mobRef.current.style.color="#CCD7E9 "
 swiper4mobRef.current.style.textDecoration="none"
  
}

const click44Mob=()=>{

  gsap.to(changable14Ref.current, { transform:` translate3d(0px,-${ 3* (textHeight + (textHeight * 0.07) + imgHeight)}px, 0px) `,duration:1});



  // Team4Ref.current.style.marginTop="-60%"


  Team1Ref.current.style.opacity="0"
  Team2Ref.current.style.opacity="0"
  Team3Ref.current.style.opacity="0"
  Team4Ref.current.style.opacity="1"

 swiper4mobRef.current.style.color="#435877"
 swiper4mobRef.current.style.textDecoration="underline"

 swiper1mobRef.current.style.color="#CCD7E9 "
 swiper1mobRef.current.style.textDecoration="none"

 swiper2mobRef.current.style.color="#CCD7E9 "
 swiper2mobRef.current.style.textDecoration="none"

 swiper3mobRef.current.style.color="#CCD7E9 "
 swiper3mobRef.current.style.textDecoration="none"

  
  
}
  


  return (

    <div className="team2-cont">

<div className='team-list-mobile4'>
            <Swiper
                spaceBetween={180}
                slidesPerView={1.3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide  onClick={click14Mob} ref={swiper1mobRef} ><p >Main architector</p></SwiperSlide>
                <SwiperSlide  onClick={click24Mob}  ref={swiper2mobRef} ><p >Manager</p></SwiperSlide>
                <SwiperSlide  onClick={click34Mob} ref={swiper3mobRef}> <p>Visualizer</p></SwiperSlide>
                <SwiperSlide  onClick={click44Mob} ref={swiper4mobRef}><p >Designer</p></SwiperSlide>

             </Swiper> 
          
        </div>
        <div className="team2"  >
            
            <div  className="changable-team-cont" ref={changable14Ref}>

           
            <div className='changable-team'  id="team1" ref={Team1Ref}>

          
            <div className='team-text'  ref={Team1TextRef}>
              <div className='team-text-para'>
                <p> BIRINCI Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                   A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                    dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                    ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                    tellus elementum”
                 </p>
            </div>          

              <div className='team-member-text'>
                  <h4>
                  Davud Khani-zada
                  </h4>         

                  <p>
                  Main architector
                  </p>
              </div>          

           </div>         

            <div className='team-image-container' ref={imageeeRef}>
                <div className='team-image' >
                  <img src={team1} ></img>         

                </div>
            </div>          




           </div>
   



    
         <div className='changable-team '  ref={Team2Ref} id="teamiki">
         <div className='team-text'>
               <div className='team-text-para'>
                 <p> IKINCI Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                    A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                     dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                     ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                     tellus elementum”
                  </p>
               </div>

               <div className='team-member-text'>
                   <h4>
                   Davud Khani-zada
                   </h4>

                   <p>
                   Main architector
                   </p>
               </div>
           </div>


           <div className='team-image-container'>
               <div className='team-image'>
                 <img src={team1}></img>

               </div>
           </div>
         </div>
          
         <div className='changable-team'   ref={Team3Ref} id="teamuch">
          <div className='team-text'>
                <div className='team-text-para'>
                  <p> UCUNCU Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                     A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                      dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                      ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                      tellus elementum”
                   </p>
                </div>

                <div className='team-member-text'>
                    <h4>
                    Davud Khani-zada
                    </h4>

                    <p>
                    Main architector
                    </p>
                </div>
            </div>


          <div className='team-image-container'>
              <div className='team-image'>
                <img src={team1}></img>

              </div>
          </div>
            </div>
    
         <div className='changable-team '  ref={Team4Ref} id="teamdort" >
         <div className='team-text'>
               <div className='team-text-para'>
                 <p>DORDUNCU Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                    A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                     dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                     ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                     tellus elementum”
                  </p>
               </div>

               <div className='team-member-text'>
                   <h4>
                   Davud Khani-zada
                   </h4>

                   <p>
                   Main architector
                   </p>
               </div>
           </div>

           
          


          <div className='team-image-container'>
              <div className='team-image'>
                <img src={team1}></img>

              </div>
          </div>

        </div>
        </div>
     
        <div className='team-list-cont'>
            <div className='team-list4'>
                <p className='main-team'         onClick={click14} ref={button1Ref}>Main architector</p>
                <p  className=" team-list-para"  onClick={click24}  ref={button2Ref}>Manager</p>
                <p   className=" team-list-para"  onClick={click34} ref={button3Ref} >Visualizer</p>
                <p   className=" team-list-para"  onClick={click44} ref={button4Ref} >Designer</p>

          </div>



         
      </div>
      
       
     
      


     
    </div>
    </div>
  )
}

export default Team4
