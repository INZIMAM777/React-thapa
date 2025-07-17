import {useId} from 'react'
export const SingleId=()=>{
    const Id=useId();
    return(
        <>
            <form >
                <label htmlFor={Id+ 'user'}>Username</label><br />
                <input id={Id+ 'user'}/><br />
                <label htmlFor={Id+ 'pass'}>Password</label><br />
                <input id={Id+ 'pass'}/><br />
                <button>submit</button>
        </form>
        </>
    )
}