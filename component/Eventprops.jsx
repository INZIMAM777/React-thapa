export const Eventprops=()=>{
    const handleClickEvent=(data)=>{
        console.log(data);
    }
    const handleMouseOverEvent=(data)=>{
        console.log(data);
    }
    return(
        <>
            <WelcomeEvent 
            onClick={()=>handleClickEvent("You click the react btn")}
            onMouseOver={()=>handleMouseOverEvent("You hover the react btn")}
            >
            </WelcomeEvent>
        </>
    )
}

const WelcomeEvent=({onClick,onMouseOver})=>{
    return(
        <>
            <button onClick={onClick}>Click Me</button>
            <button onMouseOver={onMouseOver}>Hover Me</button>
            <button onClick={onClick}>Click Me</button>
            <button onClick={onClick}>Click Me</button>
        </>
    );

}