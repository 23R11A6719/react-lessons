import React, { useState } from 'react';

function App9() {
  const [count, setCount] = useState(10); 

  const buttonStyle = {
    border: '2px solid black',
    width: '40px',
    height: '40px',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const countStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 10px',
    minWidth: '30px',
    textAlign: 'center',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  };

  return (
    <div style={{ fontFamily: 'Arial Black', padding: '30px' }}>
      <h2>App9</h2>
      <h3 style={{ fontWeight: 'bold' }}>Assignment</h3>
      <div style={containerStyle}>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>-</button>
        <div style={countStyle}>{count}</div>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App9;