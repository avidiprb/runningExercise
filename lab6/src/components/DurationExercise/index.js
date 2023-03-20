import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export function DurationExercise() {
    let [searchParams, setSearchParams] = useSearchParams()
    const parm = searchParams.get("parm")

    let [seconds, setSeconds] = useState(0);
    let [isActive, setIsActive] = useState(false);

    function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function timerDisplay(seconds) {
    var q = Math.floor(seconds/60);
    var r = seconds % 60;
    if (r < 10) {
      r = "0" + r;
    };
    if (q < 10) {
      q = "0" + q;
    };
    
    var v1 = q + ":" + r
    return v1;
  }

    return (
      <div>
        <h1>{parm}</h1>
        <p>Timer: {timerDisplay(seconds)}</p>
        <button onClick={() => toggle()}>{isActive ? 'Reset' : 'Start'}</button>
        <Link to="/">
          <button>Return</button>
        </Link>
      </div>
    );
}