import React,{useRef,useState} from 'react'
import "../menu/Menu.css"
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Menu() {

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



  
  return (
    <div className='menu-container'>
        <div className='menu'>
                
                <div className='main' onClick={menuClick1} onMouseEnter={mainOnHover} onMouseLeave={mainOffHover} ref={mainRef}>
                  <p>Main</p>
                  <div className='main-empty' ref={mainEmptyRef} ></div>
                </div>

                <Link to="/services" style={{textDecoration: "none"}}>
                <div className='services' id="services" onClick={menuClick2} onMouseEnter={servicesOnHover} onMouseLeave={servicesOffHover}  ref={servicesRef}>
                  <p>Services</p>
                  <div className='services-empty'  ref={servicesEmptyRef}></div>
                </div>
                </Link>

                <Link to="/portfolio" style={{textDecoration: "none"}}>
                <div className='portfolio-menu' id="portfolio-menu"  onClick={menuClick3} onMouseEnter={portfolioOnHover} onMouseLeave={portfolioOffHover} ref={portfolioRef}>
                  <p>Portfolio</p>
                  <div className='portfolio-empty'  ref={portfolioEmptyRef}></div>
                  </div>
                </Link>
           
        </div>

    </div>
  )
}

export default Menu