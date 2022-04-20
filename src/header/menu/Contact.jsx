import React from 'react';
import phoneImg from '../../assets/Phone.png';
import youtubeImg from '../../assets/YouTube.png'
import instagramImg from '../../assets/Instagram.png'
import facebookImg from '../../assets/FaceBook.png'

import "../menu/Contact.css" 

function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact'>
           <div className='phone-container'>
                <div className='phone-logo'>
                    <img src={phoneImg} ></img>
                </div>

                <div className='phone-number'>
                    <p><a href="tel:+994502000701">(+994 50) 200 07 01</a></p>
                </div>
           </div>

           <div className='youtube-container'>
                <div className='youtube'>
                <img src={youtubeImg}></img>
                </div>
           </div>

           <div className='instagram-container'>
                <div className='instagram'><a href="https://www.instagram.com/instagram/" target="_blank" rel="noreferrer">
                <img src={instagramImg} ></img>
                </a>
                </div>
           </div>

           <div className='facebook-container'>
                <div className='facebook'>
                <img src={facebookImg}></img>
                </div>
           </div>
          

        </div>

    </div>
  )
}

export default Contact