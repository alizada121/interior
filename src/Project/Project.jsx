import React,{useRef} from 'react'
import project1 from '../assets/project1.png'
import "../Project/Project.css"
import success from "../assets/check-mark_ccexpress.png"

function Project() {

    const headingRef=useRef();
    const projectSucces=useRef();
    const projectTapRef=useRef();

    const projectTap=()=>{
        headingRef.current.style.opacity="0"
        projectSucces.current.style.opacity="1"
        projectTapRef.current.style.background="white"
        projectTapRef.current.style.color="#435877"
        projectTapRef.current.style.border="1px solid #435877 "



    }

  return (
    <div className='project-container'>
        <div className='project-image'>
            <img src={project1}></img>
        </div>

        <div className='project-form-container'>
            <div className='project-form-heading' ref={headingRef}>
                <h2>Let's discuss your project</h2>
                <p>Fill out the form and our manager will contact with you to clarify the details</p>
                 
            </div>

            <img src={success} className="projectSucces" ref={projectSucces}></img>

            <div className='project-form'>

                <div className='project-form-row'>
                 <input type="text" placeholder="Name" />
                 <input type="text" placeholder="Your comment" />
                </div>

                <div className='project-form-column'>
                    <input type="text" placeholder="(+994 XX) XXX XX XX" className='number'/> 
                    <input type="submit" value="Send" className='submit' onClick={projectTap} ref={projectTapRef}/>

                </div>


            </div>
             
        </div>
    </div>
  )
}

export default Project