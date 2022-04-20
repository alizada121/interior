
import React,{useRef,useState} from 'react'
import "../Form/Form.css"
import success from "../assets/check-mark_ccexpress.png"

const PHONE_REGEX = new RegExp("^[0-9]*$");

function Form() {

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
    const formTextRef=useRef();
    const successFormRef=useRef();

  const formTap=(e)=>{
      e.preventDefault();

      if(validname && validphone){
        formTextRef.current.style.opacity="0"
        successFormRef.current.style.opacity="1"
      }
     

  }
  return (
    <div className='form-container'  >
        <div className='form-text-container' ref={formTextRef}>
            <div className='form-text-heading'>
                <h4>
                    Ready to implement your design project?
                </h4>
            </div>
            <div className='form-text-para'>
                <p>
                 Fill out a simple form and get a 30% discount untill 31.11.2021
                </p>
            </div>

           
        </div>
        
        <img src={success} className="successForm" ref={successFormRef}></img>

        <form>
            <div className='form'>
                <div className='form-row1'>
                    <input placeholder='Name' autoComplete="off" required ref={nameRef} onChange={nameHandler} type="text" name="name"></input>
                    <input placeholder=' (+994 XX) XXX XX XX '
                     onChange={phoneHandler}
                     type="text"
                     name="phone"
                    
                     required
                     onFocus={() => setphoneFocus(true)}
                     onBlur={() => setphoneFocus(false)}
                     ref={phoneRef}
                    ></input>
                </div>

                <div className='form-row2'>
                   
                    <select name='change tariff'>
                        <option>Select tariff</option>
                        <option>XX</option>
                        <option>XX</option>
                    </select>
                    <input type="submit" value="Send" className='submit' onClick={formTap}></input>
                </div>

            </div>
        </form>

    </div>
  )
}

export default Form
