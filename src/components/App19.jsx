import React, { useState } from 'react';

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);

  const handleRun = () => {
    if (!isGameOver) {
      setRuns(runs + 1);
      setMessage('Well Done!');
    }
  };

  const handleWicket = () => {
    if (!isGameOver) {
      const newWickets = wickets + 1;
      setWickets(newWickets);
      if (newWickets >= 10) {
        setIsGameOver(true);
        setMessage('Game Over!');
      } else {
        setMessage('Better Luck Next Time!');
      }
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>App19</h1>
      <h2>Assignment</h2>
      <h3>Cricket Scoreboard</h3>
      <div style={{ margin: '20px 0' }}>
        <div style={{ fontSize: 24 }}>Runs: {runs}</div>
        <button onClick={handleRun} disabled={isGameOver} style={{ margin: 10 }}>Run</button>
        <div style={{ fontSize: 24 }}>Wickets: {wickets}</div>
        <button onClick={handleWicket} disabled={isGameOver} style={{ margin: 10 }}>Wicket</button>
      </div>
      <h3>{message}</h3>
    </div>
  );
}