import {useState,useMemo} from 'react'
export const UseMemo=()=>{
    const [count,setCount]=useState(0)
    return(<>
        <div> 
            <Expensive/>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Re-render Component</button>
        </div>
    </>)
}

const Expensive=()=>{           
    const sum=()=>{                                                             
        let i;
        for(i=0;i<=100000;i++){
        i=i+1;
    }
    return i;
    }
   
    const expense=useMemo(()=>{return sum(),[]});
    return(
        <>
           sum:{expense}
        </>
    )
}