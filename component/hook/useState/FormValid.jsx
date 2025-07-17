import './FormValid.css';
import {useState} from "react"

export const FormValid=()=>{
    const [user,setUser]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
        PhoneNum:"",
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}))
    }

    const handleSumbit=(e)=>{
        e.preventDefault()
        console.log(user);
    }
    return(
        <>
            <div>
                <p align='center'>User Name:- {user.FirstName+'  '+user.LastName}, Email & Password:- {user.Email+" & "+user.Password}, PhoneNum:- {user.PhoneNum}</p>
                <form onSubmit={(e)=>handleSumbit(e)}>
                    <h1>Sign In</h1>
                    <label htmlFor="FirstName">FirstName: </label>
                    <input name="FirstName" type="text" value={user.FirstName} onChange={(e)=>handleChange(e)} />
                    <label htmlFor="LastName">LastName: </label>
                    <input name="LastName" type="text" value={user.LastName} onChange={(e)=>handleChange(e)} />
                    <label htmlFor="Email">Email: </label>
                    <input name="Email" type="email" value={user.Email} onChange={(e)=>handleChange(e)} />
                    <label htmlFor="Password">Password: </label>
                    <input name="Password" type="password" value={user.Password} onChange={(e)=>handleChange(e)} />
                    <label htmlFor="PhoneNum">PhoneNum: </label>
                    <input name="PhoneNum" type="number" value={user.PhoneNum} onChange={(e)=>handleChange(e)} />
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}