import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleButtonClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <button onClick={handleButtonClick}>
        <span>{formatTime(time)}</span>
      </button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${padWithZero(minutes)}:${padWithZero(remainingSeconds)}`;
}

function padWithZero(value) {
  return value < 10 ? `0${value}` : value;
}

export default Stopwatch;
