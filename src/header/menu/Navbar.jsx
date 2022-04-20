import React,{useState,useRef} from 'react'
import {Link,Route} from 'react-router-dom'
import Contact from './Contact'
import Menu from './Menu'

import { gsap } from "gsap";



import "../menu/Navbar.css"




function Navbar() {
  const menuBtnRef=useRef();
  const MobileMenuRef=useRef();
  const [open,setOpen]=useState(true);
  
  
  const hamburger=()=>{
    

    if(open){
      console.log("Salam")

      gsap.fromTo(MobileMenuRef.current, {y:-20,opacity:1,duration:1},{y:0});

      
         
      MobileMenuRef.current.style.display="block"

      setOpen(false)
    }else{
      console.log("sagol")
      gsap.to(MobileMenuRef.current, {y:-20,display:"none",opacity:0,duration:1});

      // MobileMenuRef.current.style.display="none"
      setOpen(true)
      
    }

  }
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <Menu/>
        <Contact/>
      </div>
      
      <div  id="menu-btn" className={` menu-btn ${ !open ? " open" : ""}`}  ref={menuBtnRef} onClick={hamburger}>
        <div className="menu-btn-burger">
       

        </div>
    </div>

   
    <div className='mobile-menu-container' ref={MobileMenuRef}> 
    <div className='mobile-menu'>
         
         <Link to="/services" style={{textDecoration: "none"}}>
         <div className='mobile-menu-div'><p>Services</p></div>
         </Link>
        

         <Link to="/portfolio" style={{textDecoration: "none"}}>
        <div className='mobile-menu-div'><p>Portfolio</p></div>
        </Link>
        <div className='mobile-menu-div'><p>Contact</p></div>
     


    </div>

    <div className='navbar-empty'>

    </div>
    

    

    </div>

    
   

    
   
        

    </div>
  )
}

export default Navbar