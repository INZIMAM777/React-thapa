import {useEffect,useState} from 'react'
export const IndexEffect=()=>{
    const [count,setCount]=useState(0)
    const [date,setDate]=useState('')
    const[data,setData]=useState('')
    const[incr,setIncr]=useState(0)

    useEffect(()=>{
        console.log(`Hello, This is useEffect -${count}` )
    },[count])
    const handleClick=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        setInterval(() => {
            const newDate= new Date();
            const Time=newDate.toLocaleTimeString();
            const date=newDate.toLocaleDateString();
            setDate(`${date}-${Time}`)
        }, 1000);
    },[])

    useEffect(()=>{
        console.log(`User Data -${data}` )
    },[data])

    useEffect(()=>{
        document.title=(`Count -${count}` )
    },[count])

    useEffect(()=>{
        const interval=setInterval(()=>{
            setIncr((prev)=>prev+1);
        },1000)
        return()=>clearInterval(interval);
    },[])
    
    return(<>
        <h1>Use Effect Hook</h1>
        <p>{date}</p>
        <p>{count}</p>
        <p>{incr}</p>
        <input type="text" name="Msg" value={data} onChange={(e)=>setData(e.target.value)}/> <br />
        <button onClick={()=>handleClick()}>Increment</button>
    </>)
}