import React,{useRef,useState} from 'react'
import "../slider-page/SliderText.css"

import succesMark from "../assets/check-mark_ccexpress.png"

import { gsap } from "gsap";

const PHONE_REGEX = new RegExp("^[0-9]*$");

function SliderText() {
  const [name, setname] = useState('')
  const nameRef = useRef();
  const [validname,setValidname]=useState()
  const nameHandler = (event) => {
    if(!event.target.value ){
      // console.log(value.length)
      event.target.style.border= '1px solid  red'
      console.log("girdi")
      setValidname(false)
    }else{
      event.target.style.border= '1px solid #474747'
      setValidname(true)
    }

    setname(event.target.value)
    console.log(event.target.value)
    
}


  const [phone, setphone] = useState('')
  const phoneRef = useRef();
  const [phoneFocus, setphoneFocus] = useState(false);
  const [validphone,setValidphone]=useState()

  const phoneHandler = (i) => {
    const resultPhone = PHONE_REGEX.test(i.target.value)
    setphone(resultPhone)
    if (!resultPhone) {
        i.target.style.border= '1px solid red'
        setValidphone(false)
       
    } else {
        i.target.style.border = '1px solid #474747'
        
        setValidphone(true)
    }
    setphone(i.target.value)

}



  const buttonTapRef=useRef();
  const taptextRef=useRef();
  const taptextRef1=useRef();
  const successbtn=useRef();
  const textImgRef=useRef();

  const [tap,setTap]=useState(false)

  const Tap=()=>{
   
      gsap.fromTo(buttonTapRef.current,{opacity:0,display:"none"},
      {opacity:1,display:"flex"})

   
    
   
   
  }



  const success1 = () =>{

    if(validname && validphone){
      successbtn.current.style.background="#FEFCF6";
    successbtn.current.style.border="#435877 2px solid"
    successbtn.current.style.color="#435877"

    taptextRef.current.style.opacity="0"
    textImgRef.current.style.opacity="1"

    }
  

    
    
    setTap(true);


  }

  const submitover=()=>{
    successbtn.current.style.background="#FEFCF6";
    successbtn.current.style.border="#435877 2px solid"
    successbtn.current.style.color="#435877"



  }

  const submitleave=()=>{
    console.log(tap)
    if(!tap){
      successbtn.current.style.background="#435877";
      successbtn.current.style.border="#435877 2px solid"
      successbtn.current.style.color="#FEFCF6"

    }
   

  }

  


  return (
    <div className='sliderText-container'>
        <div className='sliderText'>
            <div className='sliderText-header'>
            <h1>
             <b>Beautiful and sustainable</b>
            </h1>

            <div className='sliderText-line'>

            </div>
          </div>
            <p className='sliderText-main-text'>
             Eu eu integer turpis et suspendisse cursus.
             Accumsan commodo, lacus sociis pellentesque. Auctor aliquet vitae 
             enim tempor, habitasse massa a bibendum habitant. 
            </p>



            <div className='order-button-container'>
                <button className='order-button' onClick={Tap}><p>Order a project</p></button>
            </div>

            <div className='order-button-tap-container' ref={buttonTapRef}>
              <div className='order-button-tap'>
                <div className='order-button-tap-text' ref={taptextRef}>
                <h4 ref={taptextRef1} >Order a project</h4>
                <p>
                Fill out the form and our manager will contact with you to clarify the details
                </p>
                
                </div>
               <img src={succesMark} className="text-img" ref={textImgRef}></img>
                <div className='order-button-tap-form'>
                  <input placeholder='Name' autoComplete="off" required ref={nameRef} onChange={nameHandler} type="text" name="name"  ></input>
                  <input placeholder='(+994 50) XXX XX XX '  autoComplete="off"
                            onChange={phoneHandler}
                            type="text"
                            name="phone"
                           
                            required
                            onFocus={() => setphoneFocus(true)}
                            onBlur={() => setphoneFocus(false)}
                            ref={phoneRef} />

                  <select name='change tariff'>
                        <option>Select tariff</option>
                        <option>Standart</option>
                        <option>Premium</option>
                        <option>Luxury</option>
                  </select>
                  <input type="submit" value="Send" id='order-submit' ref={successbtn} onClick={success1} onMouseOver={submitover} onMouseLeave={submitleave}></input>
                </div>
                


              </div>


            </div>
        </div>

    </div>
  )
}

export default SliderText