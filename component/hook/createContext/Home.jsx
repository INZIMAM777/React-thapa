import {useContext} from 'react'
import {BioContext} from '.'
export const Home=()=>{
    const {myName,myAge}=useContext(BioContext);
    return(
        <>
            <p>Hello createContext(Home) with myname-{myName} and myAge-{myAge}</p>
        </>
    )
}