import {useState} from 'react';
export const DerivedState=()=>{
    // const user=[
    //     {name:"inzimam",age:20},
    //     {name:"Mustaq",age:24},
    //     {name:"kaif",age:25}
    // ];

    const [user,setUser]=useState([
        {name:"inzimam",age:20},
        {name:"Mustaq",age:25},
        {name:"kaif",age:30}
    ])
    const userLen=user.length;
    const userAgeAvg=(user.reduce((acc,curr)=>acc+curr.age,0))/userLen;
    const style={ listStyleType:'none',
                    textAlign:'center'};
    return(
        <>
            <h1 style={style}>User Data</h1>
            {user.map((value,index)=>{
                return(<>
                <li style={style}
                 key={index}>
                    <p>UserName- {value.name} and Age- {value.age}</p>
                </li>
                </>
                )                
            })}
            <p style={style}>Number of User- {userLen}</p>
            <p style={style}>Average age of User- {userAgeAvg}</p>
            
        
        </>
    )
}