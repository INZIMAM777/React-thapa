export const Practices=()=>{
    const student=[1];
    return(
        <>
        {/* <p>{student.length && "Not Available"}</p> */}
        {/* <p>{student.length===0 && "Not Available"}</p> */}
        <p>{!student.length && "Not Available"}</p>

        <p>The length of the Student Array: {student.length}</p>
        </>
    )
 
}