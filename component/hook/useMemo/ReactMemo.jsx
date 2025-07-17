import {useState} from 'react'
import {Count} from './Count.jsx'
export const ReactMemo=()=>{
    const [count,setCount]=useState(0);
    return(
        <>
            <div>
                <p>
                    Parent Count:{count}
                </p>
                <button onClick={()=>setCount(count+1)}>Incr</button>
            </div>
            <Count/>
        </>
    )
}