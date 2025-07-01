export const SyntheticEvent=()=>{
    const handleButton=(e)=>{
        console.log(e);
        console.log('button clicked')
    }

    return(
        <>
            <button onClick={handleButton}>Click me1</button>
            <button onClick={(e)=>{handleButton(e)}}>Click me2</button>
            <button onClick={(e)=>{console.log(e)}}>Click me3</button>
            <button onClick={(e)=>{alert(e)}}>Click me4</button>
            <button onClick={()=>{handleButton("hello")}}>Click me5</button>
        </>

    );
}