import { useState } from 'react';
import './Counting.css'; 
export const Counting = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1); 
  const [numList,setNumList]=useState([])

  const handleIncrCount = () => {
    if (count + num < 101) {
      setCount(count + num);
    }
  };

  const handleDecrCount = () => {
    if (count - num > -1) {
      setCount(count - num);
    }
  };

  const handleCountNum = (value) => {
    const parsedValue = Number(value);
    if (parsedValue > 0) {
      setNum(parsedValue);
      setNumList((prevNumList) => [...prevNumList, parsedValue]);
    } else {
      setNum(1); 
    }
  };

  const handleResetCount = () => {
    setCount(0); 
  };

  return (
    <>
      <div >
        <h1>{count}</h1>
        <input
          type="number"
          min="1"
          onChange={(e) => handleCountNum(e.target.value)} 
          placeholder="Enter step"
        /> <br /><br />
        <button onClick={handleIncrCount}>Increment</button>
        <button onClick={handleDecrCount}>Decrement</button>
        <button onClick={handleResetCount}>Reset</button>
      </div>
      <ul>
        {numList.map((value, index) => (
          <li key={index}>
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};
