import React,{useRef} from 'react';
import phoneImg from '../../assets/Phone.png';
import youtubeImg from '../../assets/YouTube.png'
import instagramImg from '../../assets/Instagram.png'
import facebookImg from '../../assets/FaceBook.png'

import "../menu/Contact.css" 

function Contact() {
     const fbRef=useRef();

     const fbHover=()=>{
          fbRef.current.style.fill="#4267B2"
     }

     const fbHoverOff=()=>{
          fbRef.current.style.fill="#6B7E9B"
     }

     const instaRef=useRef();

     const instaHover=()=>{
          instaRef.current.style.fill="#bc2a8d"
     }

     const instaHoverOff=()=>{
          instaRef.current.style.fill="#6B7E9B"
     }

     const ytRef=useRef();

     const ytHover=()=>{
         ytRef.current.style.fill="#FF0000"
     }

     const ytHoverOff=()=>{
         ytRef.current.style.fill="#6B7E9B"
     }

     const phoneRef=useRef();
     const phoneIconRef=useRef();

     const phoneHover=()=>{
         phoneRef.current.style.color="#435877"
         phoneIconRef.current.style.fill="#435877"
     }

     const phoneHoverOff=()=>{
         phoneRef.current.style.color="#6B7E9B"
         phoneIconRef.current.style.fill="#6B7E9B"
     
     }
  return (
    <div className='contact-container'>
        <div className='contact'>
           <div className='phone-container' onMouseEnter={phoneHover} onMouseLeave={phoneHoverOff}>
                <div className='phone-logo'>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={phoneIconRef} d="M2.3632 0.43881L3.4392 0.0948098C4.44919 -0.22719 5.5262 0.29381 5.9592 1.31181L6.8182 3.33981C7.1922 4.22281 6.9852 5.26181 6.3042 5.90781L4.4102 7.70581C4.5262 8.78181 4.8882 9.84081 5.4942 10.8828C6.06998 11.891 6.84222 12.7734 7.7652 13.4778L10.0402 12.7178C10.9032 12.4308 11.8422 12.7618 12.3702 13.5388L13.6032 15.3488C14.2182 16.2528 14.1082 17.4988 13.3452 18.2648L12.5272 19.0858C11.7132 19.9028 10.5502 20.1998 9.47519 19.8638C6.93619 19.0718 4.6022 16.7208 2.4722 12.8108C0.339196 8.89481 -0.413804 5.57081 0.214196 2.84281C0.478196 1.69481 1.2952 0.77981 2.3632 0.43881Z" fill="#6B7E9B"/>
                </svg>

                </div>

                <div className='phone-number' >
                    <p><a  ref={phoneRef} href="tel:+994502000701">(+994 50) 200 07 01</a></p>
                </div>
           </div>

           <div className='youtube-container'>
                <div className='youtube' onMouseEnter={ytHover} onMouseLeave={ytHoverOff}>
                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path ref={ytRef} d="M20.5808 2.65413C21.0555 4.5475 21.0555 8.5 21.0555 8.5C21.0555 8.5 21.0555 12.4525 20.5808 14.3459C20.3169 15.3924 19.545 16.2159 18.5674 16.4942C16.7919 17 10.6667 17 10.6667 17C10.6667 17 4.54449 17 2.76591 16.4942C1.78416 16.2116 1.0133 15.3893 0.752543 14.3459C0.277771 12.4525 0.277771 8.5 0.277771 8.5C0.277771 8.5 0.277771 4.5475 0.752543 2.65413C1.01642 1.60756 1.78832 0.784125 2.76591 0.50575C4.54449 -1.8999e-07 10.6667 0 10.6667 0C10.6667 0 16.7919 -1.8999e-07 18.5674 0.50575C19.5492 0.788375 20.32 1.61075 20.5808 2.65413ZM8.58888 12.2188L14.8222 8.5L8.58888 4.78125V12.2188Z" fill="#6B7E9B"/>
               </svg>

                </div>
           </div>

           <div className='instagram-container'  onMouseEnter={instaHover} onMouseLeave={instaHoverOff}>
                <div className='instagram'><a href="https://www.instagram.com/instagram/" target="_blank" rel="noreferrer">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={instaRef} d="M8.49771 5.66546C6.93694 5.66546 5.66323 6.9392 5.66323 8.5C5.66323 10.0608 6.93694 11.3345 8.49771 11.3345C10.0585 11.3345 11.3322 10.0608 11.3322 8.5C11.3322 6.9392 10.0585 5.66546 8.49771 5.66546ZM16.9991 8.5C16.9991 7.32621 17.0097 6.16305 16.9438 4.99138C16.8778 3.63046 16.5674 2.42264 15.5722 1.42747C14.575 0.430173 13.3693 0.121839 12.0084 0.0559198C10.8346 -0.00999972 9.67149 0.000632496 8.49984 0.000632496C7.32607 0.000632496 6.16293 -0.00999972 4.99129 0.0559198C3.63039 0.121839 2.4226 0.432299 1.42745 1.42747C0.430165 2.42477 0.121837 3.63046 0.0559188 4.99138C-0.00999953 6.16517 0.000632484 7.32833 0.000632484 8.5C0.000632484 9.67167 -0.00999953 10.837 0.0559188 12.0086C0.121837 13.3695 0.432291 14.5774 1.42745 15.5725C2.42473 16.5698 3.63039 16.8782 4.99129 16.9441C6.16506 17.01 7.3282 16.9994 8.49984 16.9994C9.67361 16.9994 10.8368 17.01 12.0084 16.9441C13.3693 16.8782 14.5771 16.5677 15.5722 15.5725C16.5695 14.5752 16.8778 13.3695 16.9438 12.0086C17.0118 10.837 16.9991 9.67379 16.9991 8.5ZM8.49771 12.8613C6.08425 12.8613 4.13648 10.9135 4.13648 8.5C4.13648 6.08649 6.08425 4.13868 8.49771 4.13868C10.9112 4.13868 12.859 6.08649 12.859 8.5C12.859 10.9135 10.9112 12.8613 8.49771 12.8613ZM13.0376 4.97862C12.4741 4.97862 12.019 4.52356 12.019 3.96006C12.019 3.39655 12.4741 2.94149 13.0376 2.94149C13.6011 2.94149 14.0561 3.39655 14.0561 3.96006C14.0563 4.09386 14.0301 4.22639 13.9789 4.35004C13.9278 4.4737 13.8528 4.58605 13.7582 4.68067C13.6636 4.77528 13.5512 4.8503 13.4276 4.90143C13.3039 4.95256 13.1714 4.97879 13.0376 4.97862Z" fill="#6B7E9B"/>
               `    </svg>

                </a>  
                </div>
           </div>

           <div className='facebook-container' onMouseEnter={fbHover} onMouseLeave={fbHoverOff}>
                <div className='facebook'>
                <svg  width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  ref={fbRef} d="M16.7778 0H1.66667C1.41619 0 1.17597 0.0995036 0.99885 0.276621C0.821733 0.453739 0.722229 0.693962 0.722229 0.944444V16.0556C0.722229 16.306 0.821733 16.5463 0.99885 16.7234C1.17597 16.9005 1.41619 17 1.66667 17H9.80306V10.4267H7.59495V7.85306H9.80306V5.96417C9.80306 3.76833 11.1442 2.57172 13.1086 2.57172C13.7688 2.56983 14.4299 2.60383 15.0872 2.67278V4.95833H13.732C12.6666 4.95833 12.4588 5.46644 12.4588 6.20972V7.84833H15.006L14.6755 10.4219H12.4579V17H16.7778C17.0283 17 17.2685 16.9005 17.4456 16.7234C17.6227 16.5463 17.7222 16.306 17.7222 16.0556V0.944444C17.7222 0.693962 17.6227 0.453739 17.4456 0.276621C17.2685 0.0995036 17.0283 0 16.7778 0Z" fill="#6B7E9B"/>
               </svg>

                </div>
           </div>
          

        </div>

    </div>
  )
}

export default Contact