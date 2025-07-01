import {useEffect, useState} from 'react'
import { IoMdDoneAll } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import './TodoList.css';

export const TodoList=()=>{
    //1
    const [inputList,setInputList]=useState('');

    const handleChange=(value)=>{
        setInputList(value);
    }
    //2
    const [listAdd,setListAdd]=useState(()=>{
        const localData=localStorage.getItem('todoList');
        if(!localData)return [];
        return JSON.parse(localData);   
    });
    const handleSubmitEvent=(e)=>{
        e.preventDefault();

        if(!inputList)return;

        if (listAdd.find((item) => item.text === inputList.trim())){setInputList(''); return;}
         const newItem = {
            id: Date.now(),
            text: inputList.trim(),
            isReaded: false,
            };

        setListAdd((prevListAdd)=>[...prevListAdd,newItem ])
        localStorage.setItem('todoList', JSON.stringify([...listAdd, newItem]));
        
        setInputList('')
    }

    //3
    const handleClickDelete = (value) => {
        const updatedList = listAdd.filter((data) => data.id !== value.id);
        setListAdd(updatedList); 
    };

    //4
    const [timeDate,setTimeDate]=useState('')
    useEffect(()=>{
        const interval=setInterval(() => {
        const now=new Date();
        const time=now.toLocaleTimeString();
        const date=now.toLocaleDateString();
        setTimeDate(`${date} - ${time}`);
    }, 1000);
    return()=>clearInterval(interval);
    },[])
    
    
    //5
    const readed={
        textDecoration: 'line-through',
        color: 'gray',
        fontStyle: 'italic'
    }

    const handleClickRead = (value) => {
        const updatedListstyle=listAdd.map((data) => data.id === value.id ? {...data, isReaded: true} : data);
        setListAdd(updatedListstyle);

    }
   //6
    const handleClearAll=()=>{
        setListAdd([]);
    }

    const section={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px'
    }

    //////////////////////////////
    return(
        <>
        <section style={section} className='outer'>
            <h1 >Todo List</h1>
            <section >                        
                <p>{timeDate}</p>
                <form action="post" onSubmit={(e)=>handleSubmitEvent(e)}>
                    <input type="text" value={inputList} onChange={(e)=>handleChange(e.target.value)} />
                    <button type='submit' className='submit'><PiPaperPlaneRightFill /></button>
                </form>
            </section>
            <section >
                <ul>
                    {listAdd.map((value) => (
                        <li key={value.id} style={value.isReaded ? readed : {}}>                         
                            {value.text}
                            <div>
                                <button className='readbtn' onClick={() => handleClickRead(value)}>
                                <IoMdDoneAll />
                            </button>

                            <button className='clearbtn' onClick={() => handleClickDelete(value)}><MdDeleteForever /></button>
                            </div>
                            
                        </li>
                    ))}

                </ul>
            </section>
            <section style={section}>
                <button onClick={()=>handleClearAll()} className='clearbtn'>Clear All</button>
            </section>
        </section>
        </>
    )
}