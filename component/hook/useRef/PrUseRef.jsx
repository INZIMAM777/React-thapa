import {useRef,useId} from 'react';
export const PrUseRef=()=>{
    const username=useRef(null)
        const password=useRef(null)
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(username.current.value,password.current.value)
        }
        return(
            <>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <InputFields lable='UserName' ref={username}/><br />
                <InputFields lable='Password' ref={password}/><br />
                <button>submit</button>
            </form>
                
            </>
        )
    }
    
    const InputFields=({lable,ref})=>{
        const Id=useId();
        return(
            <>
                <label htmlFor={Id}>{lable}</label>
                <input type="text" ref={ref} />
                <br />
            </>
        )
           
    }