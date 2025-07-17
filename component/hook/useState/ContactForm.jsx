import './FormValid.css'
import {useState} from 'react'
export const ContactForm=()=>{
    const [user,setUser]=useState({
        Email:"",
        Password:"",
        Message:"",
    })
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user)
    }
    return(<>
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} >  
                <h1>Contact</h1>        
                <label htmlFor="Email">Email: </label>
                <input name="Email" type="email" value={user.Email} onChange={(e)=>handleChange(e)} />
                <label htmlFor="Password">Password: </label>
                <input name="Password" type="password" value={user.Password} onChange={(e)=>handleChange(e)} />
                <label htmlFor="Message">Message: </label>
                <textarea name="Message" onChange={(e)=>handleChange(e)}></textarea>
                <input type="submit" />
            </form>       
        </div>      
    </>)
}