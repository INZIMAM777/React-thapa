import {useCallback,memo, useState} from 'react'
export const UseCallback=()=>{
    const [count,setCount]=useState(0);
    const incrment=useCallback(()=>{
         console.log( `Incr Button Rendered`);
        setCount(prevCount=>prevCount+1);
    },[])
    const decrment=useCallback(()=>{
         console.log( `Decr Button Rendered`);
        setCount(prevCount=>prevCount-1);
    },[])
    return(
        <>
            <p>Count:{count}</p>
            <Button onClick={incrment}>Incr</Button>
            <Button onClick={decrment}>Decr</Button>
        </>
    );
}

const Button=memo(({onClick,children})=>{
    console.log( `${children} Button Rendered`);
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
})

//------------***************------------------
//Prevent default rerendering of functions,values,components.

//UseCallback is used to optimize the functions
//UseMemo is used to optimize the values
//React.memo is used to optimize the components 