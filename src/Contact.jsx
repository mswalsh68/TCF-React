import React, {useRef} from 'react'
import './App.css'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();


    const [formData, setFormData] = React.useState({
            name:"", 
            email:"",
            company:"",
            comments:"",

        }
    )
    
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox"? checked : value
        }))
    }
    
    function handleSubmit(){
        event.preventDefault();
        console.log(formData);
        emailjs.sendForm('service_s8b4vep', 'template_7xqk5y2', form.current, '-5EntjEEuC2PrJWO4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <input className='inputs'
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input className='inputs'
                    type="text"
                    placeholder="Company"
                    onChange={handleChange}
                    name="company"
                    value={formData.company}
                />
             </div>
             <div className='inputs2'>
                    <textarea className='inputs' 
                        cols="30" 
                        rows="10"
                        placeholder="How can we help you. What products or services are you interested in?"
                        onChange={handleChange}
                        name="comments"
                        value={formData.comments}
                    />

            </div>

            <button type="submit" value="Send" className='send'> Submit</button>       
        </form>
    </div>   
    )
}
