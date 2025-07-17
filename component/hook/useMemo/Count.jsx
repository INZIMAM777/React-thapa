import {useRef,memo} from 'react'
export const Count=memo(()=>{
     const count=useRef(0);
     console.log(count);
    return(<>
       <p>This is the UseRef Count or (Children Count): {count.current++}</p>
    </>)
})