import React, { useState, useEffect } from 'react';

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (wickets >= 10) {
      setGameOver(true);
    }
  }, [wickets]);

  const handleRun = () => {
    if (!gameOver) {
      setRuns(runs + 1);
    }
  };

  const handleWicket = () => {
    if (!gameOver) {
      setWickets(wickets + 1);
    }
  };

  return (
    <div style={{ display: 'flex', padding: '30px', fontFamily: 'Arial' }}>
      {/* Left Section */}
      <div style={{ width: '20%', textAlign: 'left' }}>
        <h1>App19</h1>
        <h2>Assignment</h2>
      </div>

      {/* Middle Section */}
      <div style={{ width: '40%', textAlign: 'center', border: '2px solid black', padding: '20px', borderRadius: '20px' }}>
        <h2>Cricket Scoreboard</h2>
        <h1>{runs}</h1>
        <button onClick={handleRun} style={btnStyle}>Run</button>
        <h1>{wickets}</h1>
        <button onClick={handleWicket} style={btnStyle}>Wicket</button>
      </div>

      {/* Right Section */}
      <div style={{ width: '30%', marginLeft: '30px', border: '2px solid black', padding: '20px', borderRadius: '20px' }}>
        <p><strong>Well Done!</strong></p>
        <p><strong>Better Luck Next Time!</strong></p>
        {gameOver && <p><strong>Game Over!</strong></p>}
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px'
};