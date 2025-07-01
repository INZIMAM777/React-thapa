import {useState} from 'react'

export const LiftingState=()=>{
    const [value,setValue]=useState('')
    return(<>
        <DeclareState value={value} setValue={setValue}/>
        <ExecuteState value={value}/>
    </>)
}

const DeclareState=({value,setValue})=>{
    
    return(<>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </>)
}

const ExecuteState=({value})=>{
    return(<>
        <p>{`The state Value ${value}`}</p>
    </>)
}