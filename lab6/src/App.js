import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Home() {
  return (
    <div>
      <h1>Go Do Something!</h1>
      <p>Select an exercise:</p>
      <div>
        <Link to="/repetitionexercise?parm=Push%20Ups">
          <button>Push Ups</button>
        </Link><br/>
        <Link to="/timer?parm=Bicycling">
          <button>Bicycling</button>
        </Link><br/>
        <Link to="/repetitionexercise?parm=Jumping%20Jack">
          <button>Jumping Jacks</button>
        </Link><br/>
        <Link to="/lap?parm=Running">
          <button>Running</button>
        </Link><br/>
        <Link to="/repetitionexercise?parm=Sit%20Ups">
          <button>Sit Ups</button>
        </Link>
      </div>
    </div>
  );
}

export function App() {
  return <Home />;
}
