import { useState } from 'react';

export const EventToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const outer = {
    margin: "100px",
    padding: "20px",
    width: "100px",
    height: "40px",
    display: "flex",
    border: "2px solid black",
    backgroundColor: isOn ? 'green' : 'gray',
    borderRadius: '80px',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const inner = {
    margin: "5px",
    padding: "10px",
    width: "30px",
    height: "15px",
    border: "2px solid black",
    borderRadius: '80px',
    transition: 'transform 0.3s',
    transform: isOn ? "translateX(50px)" : "translateX(0)",
    backgroundColor: isOn ? 'green' : 'red',
    display : 'flex',
    justifyContent: 'center',       
    alignItems: 'center',
  };

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={outer} onClick={handleClick}>
      <div style={inner}>
        <span style={{ fontSize: '20px' }}>{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};
