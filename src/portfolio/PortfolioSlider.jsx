import React,{useRef, Component} from 'react'

import Swiper from "react-id-swiper";
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.js";

import portfolio1 from "../assets/portfolio3.png"
import portfolio2 from "../assets/portfolio2.png"
import portfolio3 from "../assets/portfolio3.png"

import "../portfolio/PortfolioSlider.css"

function PortfolioSlider() {

    // ///////////////////////////////////////////////Image1
    const portfolioSliderButtonRef1=useRef();
    const portfolioSliderDescriptionRef1=useRef();
    const portfolio1Ref=useRef();

    const hoverOn1=()=>{
        portfolioSliderButtonRef1.current.style.display="block"
        portfolioSliderDescriptionRef1.current.style.display="none"
        portfolio1Ref.current.style.opacity="0.3"
        portfolio1Ref.current.style.transition="0.7s"
       

    }

    const hoverOff1=()=>{
        portfolioSliderButtonRef1.current.style.display="none"
        portfolioSliderDescriptionRef1.current.style.display="block"
        portfolio1Ref.current.style.opacity="1"
        portfolio1Ref.current.style.transition="0.7s"

    }

    // ///////////////////////////////////////////////Image2

    const portfolioSliderButtonRef2=useRef();
    const portfolioSliderDescriptionRef2=useRef();
    const portfolio2Ref=useRef();

    const hoverOn2=()=>{
        portfolioSliderButtonRef2.current.style.display="block"
        portfolioSliderDescriptionRef2.current.style.display="none"
        portfolio2Ref.current.style.opacity="0.3"
        portfolio2Ref.current.style.transition="0.7s"
    }

    const hoverOff2=()=>{
        portfolioSliderButtonRef2.current.style.display="none"
        portfolioSliderDescriptionRef2.current.style.display="block"
        portfolio2Ref.current.style.opacity="1"
        portfolio2Ref.current.style.transition="0.7s"

    }

    // ///////////////////////////////////////////////Image3

    const portfolioSliderButtonRef3=useRef();
    const portfolioSliderDescriptionRef3=useRef();
    const portfolio3Ref=useRef();

    const hoverOn3=()=>{
        portfolioSliderButtonRef3.current.style.display="block"
        portfolioSliderDescriptionRef3.current.style.display="none"
        portfolio3Ref.current.style.opacity="0.3"
        portfolio3Ref.current.style.transition="0.7s"
    }

    const hoverOff3=()=>{
        portfolioSliderButtonRef3.current.style.display="none"
        portfolioSliderDescriptionRef3.current.style.display="block"
        portfolio3Ref.current.style.opacity="1"
        portfolio3Ref.current.style.transition="0.7s"

    }

    //////////////PART2//////////////////////
      // ///////////////////////////////////////////////Image1
      const portfolioSliderButtonRef4=useRef();
      const portfolioSliderDescriptionRef4=useRef();
      const portfolio4Ref=useRef();
  
      const hoverOn4=()=>{
          portfolioSliderButtonRef4.current.style.display="block"
          portfolioSliderDescriptionRef4.current.style.display="none"
          portfolio4Ref.current.style.opacity="0.3"
          portfolio4Ref.current.style.transition="0.7s"
         
  
      }
  
      const hoverOff4=()=>{
          portfolioSliderButtonRef4.current.style.display="none"
          portfolioSliderDescriptionRef4.current.style.display="block"
          portfolio4Ref.current.style.opacity="1"
          portfolio4Ref.current.style.transition="0.7s"
  
      }
  
      // ///////////////////////////////////////////////Image2
  
      const portfolioSliderButtonRef5=useRef();
      const portfolioSliderDescriptionRef5=useRef();
      const portfolio5Ref=useRef();
  
      const hoverOn5=()=>{
          portfolioSliderButtonRef5.current.style.display="block"
          portfolioSliderDescriptionRef5.current.style.display="none"
          portfolio5Ref.current.style.opacity="0.3"
          portfolio5Ref.current.style.transition="0.7s"
      }
  
      const hoverOff5=()=>{
          portfolioSliderButtonRef5.current.style.display="none"
          portfolioSliderDescriptionRef5.current.style.display="block"
          portfolio5Ref.current.style.opacity="1"
          portfolio5Ref.current.style.transition="0.7s"
  
      }
  
      // ///////////////////////////////////////////////Image3
  
      const portfolioSliderButtonRef6=useRef();
      const portfolioSliderDescriptionRef6=useRef();
      const portfolio6Ref=useRef();
  
      const hoverOn6=()=>{
          portfolioSliderButtonRef6.current.style.display="block"
          portfolioSliderDescriptionRef6.current.style.display="none"
          portfolio6Ref.current.style.opacity="0.6"
          portfolio6Ref.current.style.transition="0.7s"
      }
  
      const hoverOff6=()=>{
          portfolioSliderButtonRef6.current.style.display="none"
          portfolioSliderDescriptionRef6.current.style.display="block"
          portfolio6Ref.current.style.opacity="1"
          portfolio6Ref.current.style.transition="0.7s"
  
      }


    //////////////////PART3////////////////////////
      // ///////////////////////////////////////////////Image1
      const portfolioSliderButtonRef7=useRef();
      const portfolioSliderDescriptionRef7=useRef();
      const portfolio7Ref=useRef();
  
      const hoverOn7=()=>{
          portfolioSliderButtonRef7.current.style.display="block"
          portfolioSliderDescriptionRef7.current.style.display="none"
          portfolio7Ref.current.style.opacity="0.3"
          portfolio7Ref.current.style.transition="0.7s"
         
  
      }
  
      const hoverOff7=()=>{
          portfolioSliderButtonRef7.current.style.display="none"
          portfolioSliderDescriptionRef7.current.style.display="block"
          portfolio7Ref.current.style.opacity="1"
          portfolio7Ref.current.style.transition="0.7s"
  
      }
  
      // ///////////////////////////////////////////////Image2
  
      const portfolioSliderButtonRef8=useRef();
      const portfolioSliderDescriptionRef8=useRef();
      const portfolio8Ref=useRef();
  
      const hoverOn8=()=>{
          portfolioSliderButtonRef8.current.style.display="block"
          portfolioSliderDescriptionRef8.current.style.display="none"
          portfolio8Ref.current.style.opacity="0.3"
          portfolio8Ref.current.style.transition="0.7s"
      }
  
      const hoverOff8=()=>{
          portfolioSliderButtonRef8.current.style.display="none"
          portfolioSliderDescriptionRef8.current.style.display="block"
          portfolio8Ref.current.style.opacity="1"
          portfolio8Ref.current.style.transition="0.7s"
  
      }
  
      // ///////////////////////////////////////////////Image3
  
      const portfolioSliderButtonRef9=useRef();
      const portfolioSliderDescriptionRef9=useRef();
      const portfolio9Ref=useRef();
  
      const hoverOn9=()=>{
          portfolioSliderButtonRef9.current.style.display="block"
          portfolioSliderDescriptionRef9.current.style.display="none"
          portfolio9Ref.current.style.opacity="0.9"
          portfolio9Ref.current.style.transition="0.7s"
      }
  
      const hoverOff9=()=>{
          portfolioSliderButtonRef9.current.style.display="none"
          portfolioSliderDescriptionRef9.current.style.display="block"
          portfolio9Ref.current.style.opacity="1"
          portfolio9Ref.current.style.transition="0.7s"
  
      }


      //////////////////////PART4
       // ///////////////////////////////////////////////Image1
       const portfolioSliderButtonRef10=useRef();
       const portfolioSliderDescriptionRef10=useRef();
       const portfolio10Ref=useRef();
   
       const hoverOn10=()=>{
           portfolioSliderButtonRef10.current.style.display="block"
           portfolioSliderDescriptionRef10.current.style.display="none"
           portfolio10Ref.current.style.opacity="0.3"
           portfolio10Ref.current.style.transition="0.10s"
          
   
       }
   
       const hoverOff10=()=>{
           portfolioSliderButtonRef10.current.style.display="none"
           portfolioSliderDescriptionRef10.current.style.display="block"
           portfolio10Ref.current.style.opacity="1"
           portfolio10Ref.current.style.transition="0.7s"
   
       }
   
       // ///////////////////////////////////////////////Image2
   
       const portfolioSliderButtonRef11=useRef();
       const portfolioSliderDescriptionRef11=useRef();
       const portfolio11Ref=useRef();
   
       const hoverOn11=()=>{
           portfolioSliderButtonRef11.current.style.display="block"
           portfolioSliderDescriptionRef11.current.style.display="none"
           portfolio11Ref.current.style.opacity="0.3"
           portfolio11Ref.current.style.transition="0.7s"
       }
   
       const hoverOff11=()=>{
           portfolioSliderButtonRef11.current.style.display="none"
           portfolioSliderDescriptionRef11.current.style.display="block"
           portfolio11Ref.current.style.opacity="1"
           portfolio11Ref.current.style.transition="0.7s"
   
       }
   
       // ///////////////////////////////////////////////Image3
   
       const portfolioSliderButtonRef12=useRef();
       const portfolioSliderDescriptionRef12=useRef();
       const portfolio12Ref=useRef();
   
       const hoverOn12=()=>{
           portfolioSliderButtonRef12.current.style.display="block"
           portfolioSliderDescriptionRef12.current.style.display="none"
           portfolio12Ref.current.style.opacity="0.12"
           portfolio12Ref.current.style.transition="0.7s"
       }
   
       const hoverOff12=()=>{
           portfolioSliderButtonRef12.current.style.display="none"
           portfolioSliderDescriptionRef12.current.style.display="block"
           portfolio12Ref.current.style.opacity="1"
           portfolio12Ref.current.style.transition="0.7s"
   
       }
 

    const portfolioSliderLine1Ref=useRef();
    const portfolioSliderLine2Ref=useRef();
    const portfolioSliderLine3Ref=useRef();
    const portfolioSliderLine4Ref=useRef();

    const triple1=useRef();
    const triple2=useRef();
    const triple3=useRef();
    const triple4=useRef();

    const portfolioSliderLine1 =()=>{
        // portfolioSliderLine1Ref.current.style.border=" border: solid 4px #435877 solid 1.5px;"
        portfolioSliderLine1Ref.current.style.borderBottom=" solid 4px #435877"

        // portfolioSliderLine2Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine2Ref.current.style.borderBottom=" solid 4px  #B4A890"

        // portfolioSliderLine3Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine3Ref.current.style.borderBottom=" solid 4px  #B4A890"

        // portfolioSliderLine4Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine4Ref.current.style.borderBottom=" solid 4px  #B4A890"

        triple1.current.style.opacity="1"
        triple2.current.style.opacity="0"
        triple3.current.style.opacity="0"
        triple4.current.style.opacity="0"

        
    }

    const portfolioSliderLine2 =()=>{
        console.log("girdi")
        // portfolioSliderLine2Ref.current.style.border=" border: solid 4px #435877 solid 1.5px;"
        portfolioSliderLine2Ref.current.style.borderBottom=" solid 4px #435877"

        // portfolioSliderLine1Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine1Ref.current.style.borderBottom=" solid 4px  #B4A890"

        // portfolioSliderLine3Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine3Ref.current.style.borderBottom=" solid 4px  #B4A890"

        // portfolioSliderLine4Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine4Ref.current.style.borderBottom=" solid 4px  #B4A890"

        triple1.current.style.opacity="0"
        triple2.current.style.opacity="1"
        triple3.current.style.opacity="0"
        triple4.current.style.opacity="0"
    }

    const portfolioSliderLine3 =()=>{
        // portfolioSliderLine3Ref.current.style.border=" border: solid 4px #435877 solid 1.5px;"
        portfolioSliderLine3Ref.current.style.borderBottom=" solid 4px #435877"

        // portfolioSliderLine2Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine2Ref.current.style.borderBottom=" solid 4px  #B4A890"

        // portfolioSliderLine1Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine1Ref.current.style.borderBottom=" solid 4px  #B4A890"

        // portfolioSliderLine4Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine4Ref.current.style.borderBottom=" solid 4px  #B4A890"
        triple1.current.style.opacity="0"
        triple2.current.style.opacity="0"
        triple3.current.style.opacity="1"
        triple4.current.style.opacity="0"
    }

    const portfolioSliderLine4 =()=>{
        // portfolioSliderLine4Ref.current.style.border=" border: solid 4px #435877 solid 1.5px;"
        portfolioSliderLine4Ref.current.style.borderBottom=" solid 4px #435877"

        // portfolioSliderLine2Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine2Ref.current.style.borderBottom=" solid 4px  #B4A890"

        // portfolioSliderLine3Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine3Ref.current.style.borderBottom=" solid 4px  #B4A890"

        // portfolioSliderLine1Ref.current.style.border=" border: solid 4px  #B4A890 solid 1.5px;"
        portfolioSliderLine1Ref.current.style.borderBottom=" solid 4px  #B4A890"
        triple1.current.style.opacity="0"
        triple2.current.style.opacity="0"
        triple3.current.style.opacity="0"
        triple4.current.style.opacity="1"
    }


    

  



  return (
    <div className='portfolioSlider-container'>
        <div className='portfolioSlider'>
            <div className='portfolioSlider-images' ref={triple1}> 
            <div className='portfolioSlider-image' onMouseOver={hoverOn1} onMouseLeave={hoverOff1}>
                <img src={portfolio1} ref={portfolio1Ref}></img>
                <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef1}><p>Nibh habitasse nulla</p></div>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef1}> <button><p>Order a Project</p></button></div>
            </div>
            
            <div className='portfolioSlider-image' onMouseOver={hoverOn2} onMouseLeave={hoverOff2}>
            <img src={portfolio2} ref={portfolio2Ref}></img>
            <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef2}><p>Nibh habitasse nulla</p> </div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef2}> <button><p>Order a Project</p></button></div>
            </div>
            

            <div className='portfolioSlider-image' onMouseOver={hoverOn3} onMouseLeave={hoverOff3}>
            <img src={portfolio3} ref={portfolio3Ref}></img>
            <div className='portfolioSlider-description'  ref={portfolioSliderDescriptionRef3}> <p>Nibh habitasse nulla</p></div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef3}> <button><p>Order a Project</p></button></div>
            </div>
            
            </div>


            <div className='portfolioSlider-images-part2' ref={triple2}> 
            <div className='portfolioSlider-image' onMouseOver={hoverOn4} onMouseLeave={hoverOff4}>
                <img src={portfolio3} ref={portfolio4Ref}></img>
                <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef4}><p>Nibh habitasse ikinic</p></div>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef4}> <button><p>Order a Project</p></button></div>
            </div>
            
            <div className='portfolioSlider-image' onMouseOver={hoverOn5} onMouseLeave={hoverOff5}>
            <img src={portfolio2} ref={portfolio5Ref}></img>
            <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef5}><p>Nibh habitasse nulla</p> </div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef5}> <button><p>Order a Project</p></button></div>
            </div>
            

            <div className='portfolioSlider-image' onMouseOver={hoverOn6} onMouseLeave={hoverOff6}>
            <img src={portfolio1} ref={portfolio6Ref}></img>
            <div className='portfolioSlider-description'  ref={portfolioSliderDescriptionRef6}> <p>Nibh habitasse nulla</p></div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef6}> <button><p>Order a Project</p></button></div>
            </div>

            
            
            </div>

            <div className='portfolioSlider-images-part3' ref={triple3}> 
            <div className='portfolioSlider-image' onMouseOver={hoverOn7} onMouseLeave={hoverOff7}>
                <img src={portfolio2} ref={portfolio7Ref}></img>
                <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef7}><p>Nibh habitasse ucuncu</p></div>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef7}> <button><p>Order a Project</p></button></div>
            </div>
            
            <div className='portfolioSlider-image' onMouseOver={hoverOn8} onMouseLeave={hoverOff8}>
            <img src={portfolio1} ref={portfolio8Ref}></img>
            <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef8}><p>Nibh habitasse nulla</p> </div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef8}> <button><p>Order a Project</p></button></div>
            </div>
            

            <div className='portfolioSlider-image' onMouseOver={hoverOn9} onMouseLeave={hoverOff9}>
            <img src={portfolio3} ref={portfolio9Ref}></img>
            <div className='portfolioSlider-description'  ref={portfolioSliderDescriptionRef9}> <p>Nibh habitasse nulla</p></div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef9}> <button><p>Order a Project</p></button></div>
            </div>

            
            
            </div>

            <div className='portfolioSlider-images-part4' ref={triple4}> 
            <div className='portfolioSlider-image' onMouseOver={hoverOn10} onMouseLeave={hoverOff10}>
                <img src={portfolio1} ref={portfolio10Ref}></img>
                <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef10}><p>Nibh habitasse dord</p></div>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef10}> <button><p>Order a Project</p></button></div>
            </div>
            
            <div className='portfolioSlider-image' onMouseOver={hoverOn11} onMouseLeave={hoverOff11}>
            <img src={portfolio2} ref={portfolio11Ref}></img>
            <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef11}><p>Nibh habitasse nulla</p> </div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef11}> <button><p>Order a Project</p></button></div>
            </div>
            

            <div className='portfolioSlider-image' onMouseOver={hoverOn12} onMouseLeave={hoverOff12}>
            <img src={portfolio3} ref={portfolio12Ref}></img>
            <div className='portfolioSlider-description'  ref={portfolioSliderDescriptionRef12}> <p>Nibh habitasse nulla</p></div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef12}> <button><p>Order a Project</p></button></div>
            </div>

            
            
            </div>

            <div className='portfolioSlider-lines'>
                <div className='portfolioSlider-line ' id="lineDefult" ref={portfolioSliderLine1Ref} onClick={portfolioSliderLine1}></div>
                <div className='portfolioSlider-line' ref={portfolioSliderLine2Ref} onClick={portfolioSliderLine2}></div>
                <div className='portfolioSlider-line' ref={portfolioSliderLine3Ref} onClick={portfolioSliderLine3}> </div>
                <div className='portfolioSlider-line' ref={portfolioSliderLine4Ref} onClick={portfolioSliderLine4}></div>
            </div>

            

        </div>

        


        

    </div>
  )
}

export default PortfolioSlider