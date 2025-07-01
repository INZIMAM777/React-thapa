export const ProfileCard=(props)=>{
    return(
        <>
        <div>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <div><strong>Greeting: </strong>{props.greeting}</div>
            <div>{props.children}</div>
        
        </div>
        </>
    )
}