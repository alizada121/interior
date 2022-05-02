import React,{useRef,useState} from 'react'
import gsap from 'gsap';
import "../ServicesPage/ServicesPage.css"

import services1 from "../assets/services1.png"
import services2 from "../assets/services2.png"
import services3 from "../assets/services3.png"
import { Link } from 'react-router-dom';
import Menu from '../header/menu/Menu';
import Contact from '../header/menu/Contact';
import Map from '../Map/Map'

function ServicesPage() {

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
    const portfolioSliderButtonRef2=useRef();
    const portfolioSliderButtonRef3=useRef();
    const servImg3Ref=useRef();
    const luxuryOnhover=()=>{
        console.log("girdi")
        servImg3Ref.current.style.opacity="0.6"
        portfolioSliderButtonRef3.current.style.display="block"

    }
    
    const luxuryOffHover=()=>{
        servImg3Ref.current.style.opacity="1"
        portfolioSliderButtonRef3.current.style.display="none"

    }

    const servImg1Ref=useRef();
    const standartOnhover=()=>{
        console.log("girdi")
        servImg1Ref.current.style.opacity="0.6"
        portfolioSliderButtonRef1.current.style.display="block"

    }
    
    const standartOffHover=()=>{
        servImg1Ref.current.style.opacity="1"
        portfolioSliderButtonRef1.current.style.display="none"

    }

    const servImg2Ref=useRef();
    const premiumOnhover=()=>{
        console.log("girdi")
        servImg2Ref.current.style.opacity="0.6"
        portfolioSliderButtonRef2.current.style.display="block"

    }
    
    const premiumOffHover=()=>{
        servImg2Ref.current.style.opacity="1"
        portfolioSliderButtonRef2.current.style.display="none"

    }
  return (
    <div className='ServicesPage-container'>
        <div className='servicesPage-menu-container'>
        <div className='servicesPage-menu'>
          <div className='menu-sp'> 
          <Link to="/" style={{textDecoration: "none"}}>
                <div className='main-port' onClick={menuClick1} onMouseEnter={mainOnHover} onMouseLeave={mainOffHover} ref={mainRef}>
                  <p>Main</p>
                  <div className='main-empty-port' ref={mainEmptyRef} ></div>
                </div>
                </Link>
                <div className='services-serv'  onClick={menuClick2} onMouseEnter={servicesOnHover} onMouseLeave={servicesOffHover}  ref={servicesRef}>
                  <p>Services</p>
                  <div className='services-empty-serv'  ref={servicesEmptyRef}></div>
                </div>
                <Link to="/portfolio" style={{textDecoration: "none"}}>
                <div className='portfolio-menu-serv'  onClick={menuClick3} onMouseEnter={portfolioOnHover} onMouseLeave={portfolioOffHover} ref={portfolioRef}>
                  <p>Portfolio</p>
                  <div className='portfolio-empty-serv'  ref={portfolioEmptyRef}></div>
                  </div>
                </Link> 

          </div>

              
                {/* <Menu/> */}
                <Contact/>

          </div>
       </div>
       

       <div className='servicesPage-header'>
       <div className='services-header-empty leftServ' ></div>
            <div className='services-heading' >
                <h2>Types of services</h2>
            </div>
            <div className='services-header-empty rightServ'></div>
            
       </div>


       <div className='servicesPage-body-container'>

       <div className='services-body'>
            <div className='service'>
                
                <h4>Standart</h4>
                <p>
                In ipsum at mi magna lorem massa. Risus viverra faucibus mauris integer augue semper vestibulum. Sit praesent
                </p>
                <div className='services-img' onMouseOver={standartOnhover} onMouseLeave={standartOffHover}>
                <img src={services1} ref={servImg1Ref}></img>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef1}> <button><p>Order a Project</p></button></div>
                {/* <div className='services-description'>
                <p>Blandit augue dictum</p>
                </div> */}
                </div>
            </div>

            <div className='service Premium'>
                <h4>Premium</h4>
                <p>
                Urna vel augue in dui porta nisl. Sed aenean mauris, a, nullam lobortis amet porttitor non in. Lorem id
                </p>

                <div className='services-img' onMouseOver={premiumOnhover} onMouseLeave={premiumOffHover}>
                <img src={services2}  ref={servImg2Ref}></img>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef2}> <button><p>Order a Project</p></button></div>

                {/* <div className='services-description'>
                    <p>
                        Posuere quis id inder
                    </p>

                </div> */}
                </div>

            </div>

            <div className='service'>
                <h4>Luxury</h4>
                <p>
                    Massa non orci pharetra risus suspendisse. Cras viverra sed id tincidunt hendrerit augue ut. Ipsum aliquet euismod
                </p>

                <div className='services-img' onMouseOver={luxuryOnhover} onMouseLeave={luxuryOffHover}>
                <img src={services3} ref={servImg3Ref}></img>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef3}> <button><p>Order a Project</p></button></div>

                {/* <div className='services-description'>
                    <p>
                     Aliquam molestie nullam
                    </p>

                </div> */}
                </div>

            </div>
           
        </div>

        <div className='services-footer'>
          <Map/>

        </div>

       </div>

    </div>
  )
}

export default ServicesPage