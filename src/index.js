import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  App
} from "./App";
import {
  DurationExercise
} from "./components/DurationExercise";
import {
  RepetitionExercise
} from "./components/RepetitionExercise";
import {
  RunningExercise
} from "./components/RunningExercise";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/repetitionexercise" element={<RepetitionExercise />}/>
      <Route path="/timer" element={<DurationExercise />}/>
      <Route path="/lap" element={<RunningExercise />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

