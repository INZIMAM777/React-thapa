import {useRef} from 'react'
export const UseRef=()=>{
    const username=useRef(null)
    const password=useRef(null)
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value,password.current.value)
    }
    return(
        <>
        <form onSubmit={(e)=>handleSubmit(e)} >
            <label htmlFor='username'>Username</label><br />
            <input id="username" ref={username}/><br />
            <label htmlFor='password'>Password</label><br />
            <input id="password" ref={password}/><br />
            <button>submit</button>
        </form>
            
        </>
    )
}
