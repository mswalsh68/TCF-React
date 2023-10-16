import React, {useRef} from 'react'
import './App.css'
import emailjs from '@emailjs/browser';
import {Routes, Route, Link} from 'react-router-dom'
import ThankYou from './ThankYou';

export default function Contact() {

    const form = useRef();

    function handleSubmit(e){
        e.preventDefault();
 
    emailjs.sendForm('service_s8b4vep', 'template_7xqk5y2', form.current, '-5EntjEEuC2PrJWO4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });e.target.reset()
    }

  return (

    <div>

        <div className="sectionSplit">
                <h2><b>Contact Us</b></h2>
        </div>
        
         <form ref={form} className='form' onSubmit={handleSubmit}>  
            <div className="inputs1">
                <input className='inputs' 
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input className='inputs'
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <input className='inputs'
                    type="text"
                    placeholder="Company"
                    name="company"
                />
             </div>
             <div className='inputs2'>
                    <textarea className='inputs' 
                        cols="30" 
                        rows="10"
                        placeholder="How can we help you.cts or services are you interested in?"
                        name="comments"
                    />

            </div>

            <button type="submit" value="Send" className='send'>Submit
                <Link to='/ThankYou'></Link>
            </button>       
        </form>

        <Routes>
            <Route path='/' element={<ThankYou />} />
        </Routes>
    </div>   
    )
}
