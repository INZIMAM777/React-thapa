import {useContext} from 'react'
import {BioContext} from '.'

export const UseCustom=()=>{
    const {myName,myAge}=useBioCustom();
    return(
        <>
            <p>Hello createContext(CustomHook) with myname-{myName} and myAge-{myAge}</p>
        </>
    )
}

//

export const useBioCustom=()=>{
    const context=useContext(BioContext); //custom hook is use to call other hooks and use behalf of other hooks
    return context;
}