import {useId} from 'react'
export const UseId=()=>{
    const userId=useId();
    const passId=useId();
    return(
        <>
            <form >
                <label htmlFor={userId}>Username</label><br />
                <input id={userId}/><br />
                <label htmlFor={passId}>Password</label><br />
                <input id={passId}/><br />
                <button>submit</button>
        </form>
        </>
    )
}