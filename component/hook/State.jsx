import {useState} from 'react';
export const State=()=>{
    const [count,setCount] = useState(0);
    const handleCount=()=>{
        setCount(()=>count+1)
    }
    return(
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={()=>handleCount()}>Increment</button>
            </div>
            <Childcomp count={count}/>  {/*  Passing count to child component */}
        </>
    )
}
const Childcomp=({count})=>{
    console.log("Child component rendered");
    return(
        <>
            <h1>{`I am a child component and count - ${count}`}</h1>
        </>
    )
}

export const Sibling=()=>{
    console.log("Sibling component rendered");
    return(
        <>
            <h1>{`I am a sibling component`}</h1>
        </>
    )
}