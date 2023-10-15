import React from 'react'
import './App.css'

export default function Contact() {

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
    }
    

  return (

    <div>
         <form className='form' method='post' onSubmit={handleSubmit}>  
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
                        placeholder="How can we help you"
                        onChange={handleChange}
                        name="comments"
                        value={formData.comments}
                    />

            </div>

             <button className='send'>Submit</button>
        
        </form>
    </div>   
    )
}
