import {useContext} from 'react'
import {BioContext} from '.'
export const About=()=>{
    const {myName,myAge}=useContext(BioContext);
    return(
        <>
            <p>Hello createContext(About) with myname-{myName} and myAge-{myAge}</p>
        </>
    )
}