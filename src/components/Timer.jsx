import React, { useState, useEffect, useContext } from 'react';
import { ActiveTimer } from '../contexts/timerStatus';
import { TimerToggle } from '../contexts/timerToggle';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const { activeTimer, setActiveTimer } = useContext(ActiveTimer);
  const {timerStatus} = useContext(TimerToggle)

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setActiveTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [isRunning]);

  const handleButtonClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setActiveTimer(0);
  };

  return (
    <div className={'timer ' + (timerStatus ? 'visible' : 'hidden')} >
      <span>{formatTime(activeTimer)}</span>
      <div id='wrapper'>
        <button onClick={handleButtonClick} className={'timerButton ' + (isRunning ? 'stopButton' : 'activeSandwich')}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
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
