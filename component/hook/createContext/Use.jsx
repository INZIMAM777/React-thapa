import {use} from 'react'
import {BioContext} from '.'

export const Use=()=>{
   const {myName,myAge}=useBioCustom();
       return(
           <>
               <p>Hello createContext(Use Hook) with myname-{myName} and myAge-{myAge}</p>
           </>
       )
   }
   
   //
   
   export const useBioCustom=()=>{
       const context=use(BioContext); //use hook use behalf of use context hook 
       return context;
   }