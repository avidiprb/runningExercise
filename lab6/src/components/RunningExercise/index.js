import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export function RunningExercise() {
    let [searchParams, setSearchParams] = useSearchParams()
    const parm = searchParams.get("parm")

    let [seconds, setSeconds] = useState(0);
    let [isActive, setIsActive] = useState(false);
    let [lapData, setLapData] = useState([]);
    let [secondsAtLap, setSecondsAtLap] = useState(0);

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

  var latestLap = 0;
  /*let latestTime = "";*/
  //let latestSeconds = 0;
  let lidata ="";
  //let newlap = 0;
  //console.log("After initilizing new lap.");

  function lap (seconds, isActive, lapData) {
    //let latestSeconds = 0;
    if (isActive === false) {
      ;
    }
    else {
      if (lapData.length === 0) {
        let v1 = timerDisplay(seconds);
        setSecondsAtLap(seconds);
        latestLap = 1;
        console.log("when array empty -before push");
        let v2 = (lapData);
        v2.push("lap-"+latestLap+": "+v1);
        console.log(v2);
        setLapData([...v2]);
        console.log("when array empty -after push");
        /*latestTime = v1;*/
        //latestSeconds = seconds;
        //newlap = latestLap;
        console.log(v2);

      } else {
          
          //let v1 = timerDisplay(seconds - latestSeconds);
          var newlap = lapData.length + 1;


          let v1 = timerDisplay(seconds - secondsAtLap);
          setSecondsAtLap(seconds);
         console.log("after lapdata.length newlap = " + newlap);
        console.log("when array not empty -before push");
        let v2 = (lapData);
        v2.push("lap-"+newlap+": "+v1);
        setLapData([...v2]);
        console.log("when array not empty -after push");
        /*latestTime = v1;*/
        console.log(v2);
      }
    }
  }
  
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

  lidata = lapData.map((item,i) => 
  <li key={i}>{item}</li>  
  );

  return (
    <div>
      <h1>{parm}</h1>
      <p>Timer: {timerDisplay(seconds)}</p>
      <button onClick={() => toggle()}>{isActive ? 'Reset' : 'Start'}</button>
      <button onClick={() => lap(seconds, isActive, lapData)}>Lap</button>
      <Link to="/">
        <button>Return</button>
      </Link>
      <ul>
        {lidata}
      </ul>
    </div>
  );
}