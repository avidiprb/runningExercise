import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export function RepetitionExercise() {
    let [searchParams, setSearchParams] = useSearchParams()
    let [reps, setReps] = useState(0);
  
    const parm = searchParams.get("parm")
    return (
      <div>
        <h1>{parm}</h1>
        <p>Reps: {reps}</p>
        <button onClick={() => setReps(reps++)}>Complete Rep</button>
        <button onClick={() => setReps(0)}>Reset</button>
        <Link to="/">
          <button>Return</button>
        </Link>
      </div>
    );
  }