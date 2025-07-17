import {useReducer} from 'react'
export const UseReducer=()=>{
    // const reducer=(state,action)=>{
    //     if(action.type==='Incr')return state+1;
    //     if(action.type==='Decr')return state-1;
    //     if(action.type=='Reset')return state;
    // }

    const reducer=(state,action)=>{
        switch(action.type){
            case 'Incr':
                return {
                    ...state,
                    count:(state.count+2)}
            case 'Decr':
                return {
                    ...state,
                    count:(state.count-2)}
            case 'Reset':
                return {
                    ...state,
                    count:(state.count=0)}
            default:
                return state
        }
    }

    const initialState={
        count:0,
        incr:2,
        decr:2
    }

    const [state, dispatch]=useReducer(reducer,initialState)
    return(<>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:"Incr"})}>Incr</button>
        <button onClick={()=>dispatch({type:"Decr"})}>Decr</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </>)
}