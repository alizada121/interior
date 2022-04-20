import React,{useRef,useState} from 'react'
import { Link } from 'react-router-dom'
import "../PortfolioPage/PortfolioPage.css"
import Menu from '../header/menu/Menu'
import gsap from 'gsap'

import portfolio1 from "../assets/portfolio3.png"
import portfolio2 from "../assets/portfolio2.png"
import portfolio3 from "../assets/portfolio3.png"

function PortfolioPage() {

    
    const mainRef=useRef();
    const servicesRef=useRef();
    const portfolioRef=useRef();
  
    const mainEmptyRef=useRef();
    const servicesEmptyRef=useRef();
    const portfolioEmptyRef=useRef();
  
    const [main,setMain]=useState(false);
    const [services,setServices]=useState(false);
    const [portfolio,setPortfolio]=useState(false);
    
    
    const menuClick1=()=>{
  
      setMain(true);
      if(main){
        mainEmptyRef.current.style.width="100%"
       
      }else{
        mainEmptyRef.current.style.width="0%"
      }
  
      portfolioEmptyRef.current.style.width="0%"
      servicesEmptyRef.current.style.width="0%"
      
    }
  
    const menuClick2=()=>{
      setServices(true)
      if(services){
        servicesEmptyRef.current.style.width="100%"
      
      }else{
        servicesEmptyRef.current.style.width="0%"
      }
  
      portfolioEmptyRef.current.style.width="0%"
      mainEmptyRef.current.style.width="0%"
    
  
    }
  
    const menuClick3=()=>{
      setPortfolio(true)
  
      if(portfolio){
        portfolioEmptyRef.current.style.width="100%"
        
      }else{
        portfolioEmptyRef.current.style.width="0%"
      }
  
      servicesEmptyRef.current.style.width="0%"
        mainEmptyRef.current.style.width="0%"
     
    
    }
  
  
    const mainOnHover=()=>{
      gsap.fromTo(mainEmptyRef.current, { width:'0', },{
        width:'100%',
        duration:0.4
  
      });
  
  
    }
  
    const mainOffHover=()=>{
      setMain(false)
      if (!main){
        gsap.to(mainEmptyRef.current, { width:'0',});
      }
  
      
    }
  
    const servicesOnHover=()=>{
  
      gsap.fromTo(servicesEmptyRef.current, { width:'0', },{
        width:'100%',
        duration:0.4
  
      });
      
  
  
    }
  
    const servicesOffHover=()=>{
      setServices(false)
      if (!services){
        gsap.to(servicesEmptyRef.current, { width:'0',});
      }
      
  
      
    }
  
    const portfolioOnHover=()=>{
      gsap.fromTo(portfolioEmptyRef.current, { width:'0', },{
        width:'100%',
        duration:0.4
  
      });
  
  
    }
  
    const portfolioOffHover=()=>{
      setPortfolio(false)
      if (!portfolio){
        gsap.to(portfolioEmptyRef.current, { width:'0',});
      }
  
      
    }


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
        portfolio4Ref.current.style.opacity="4"
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
        portfolio6Ref.current.style.opacity="0.3"
        portfolio6Ref.current.style.transition="0.7s"
    }

    const hoverOff6=()=>{
        portfolioSliderButtonRef6.current.style.display="none"
        portfolioSliderDescriptionRef6.current.style.display="block"
        portfolio6Ref.current.style.opacity="1"
        portfolio6Ref.current.style.transition="0.7s"

    }

     // ///////////////////////////////////////////////Image3

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

      // ///////////////////////////////////////////////Image3

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
         portfolio9Ref.current.style.opacity="0.3"
         portfolio9Ref.current.style.transition="0.7s"
     }
 
     const hoverOff9=()=>{
         portfolioSliderButtonRef9.current.style.display="none"
         portfolioSliderDescriptionRef9.current.style.display="block"
         portfolio9Ref.current.style.opacity="1"
         portfolio9Ref.current.style.transition="0.7s"
 
     }


  return (
    <div className='porfolioPage-container'>
        <div className='portfolioPage'>
          <div className='portfolioPage-menu-container'>
          <div className='portfolioPage-menu'>
          <Link to="/"  style={{textDecoration: "none"}}>
          <div className='main-port' onClick={menuClick1} onMouseEnter={mainOnHover} onMouseLeave={mainOffHover} ref={mainRef}>
                  <p>Main</p>
                  <div className='main-empty-port' ref={mainEmptyRef} ></div>
                </div>
          </Link>
          <Link to="/services" style={{textDecoration: "none"}}>
                <div className='services'  onClick={menuClick2} onMouseEnter={servicesOnHover} onMouseLeave={servicesOffHover}  ref={servicesRef}>
                  <p>Services</p>
                  <div className='services-empty'  ref={servicesEmptyRef}></div>
                </div>
                </Link>
                <div className='portfolio-menu-port'  onClick={menuClick3} onMouseEnter={portfolioOnHover} onMouseLeave={portfolioOffHover} ref={portfolioRef}>
                  <p>Portfolio</p>
                  <div className='portfolio-empty-port'  ref={portfolioEmptyRef}></div>
                  </div>

          </div>

          </div>
          

          <div className='portfolioPage-header'>
             <div className='portfolioHeader-empty left' > </div>
             <div className='portfolioHeader-heading'> <h4>Portfolio of our works</h4></div>
             <div className='portfolioHeader-empty right'id="portfolioHeader-empty-right"> </div>   
           </div>

            <div className='portfolioSlider-images1'> 
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



            <div className='portfolioSlider-images2'> 
            <div className='portfolioSlider-image' onMouseOver={hoverOn4} onMouseLeave={hoverOff4}>
                <img src={portfolio2} ref={portfolio4Ref}></img>
                <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef4}><p>Nibh habitasse nulla</p></div>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef4}> <button><p>Order a Project</p></button></div>
            </div>
            
            <div className='portfolioSlider-image' onMouseOver={hoverOn5} onMouseLeave={hoverOff5}>
            <img src={portfolio1} ref={portfolio5Ref}></img>
            <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef5}><p>Nibh habitasse nulla</p> </div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef5}> <button><p>Order a Project</p></button></div>
            </div>
            

            <div className='portfolioSlider-image' onMouseOver={hoverOn6} onMouseLeave={hoverOff6}>
            <img src={portfolio2} ref={portfolio6Ref}></img>
            <div className='portfolioSlider-description'  ref={portfolioSliderDescriptionRef6}> <p>Nibh habitasse nulla</p></div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef6}> <button><p>Order a Project</p></button></div>
            </div>
            
            </div>


            <div className='portfolioSlider-images3'> 
            <div className='portfolioSlider-image' onMouseOver={hoverOn7} onMouseLeave={hoverOff7}>
                <img src={portfolio2} ref={portfolio7Ref}></img>
                <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef7}><p>Nibh habitasse nulla</p></div>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef7}> <button><p>Order a Project</p></button></div>
            </div>
            
            <div className='portfolioSlider-image' onMouseOver={hoverOn8} onMouseLeave={hoverOff8}>
            <img src={portfolio1} ref={portfolio8Ref}></img>
            <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef8}><p>Nibh habitasse nulla</p> </div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef8}> <button><p>Order a Project</p></button></div>
            </div>
            

            <div className='portfolioSlider-image' onMouseOver={hoverOn9} onMouseLeave={hoverOff9}>
            <img src={portfolio2} ref={portfolio9Ref}></img>
            <div className='portfolioSlider-description'  ref={portfolioSliderDescriptionRef9}> <p>Nibh habitasse nulla</p></div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef9}> <button><p>Order a Project</p></button></div>
            </div>
            
            </div>

          

            


          
            

        </div>
        
    </div>
  )
}

export default PortfolioPage