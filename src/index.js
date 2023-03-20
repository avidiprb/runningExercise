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
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/repetitionexercise",
    element: <RepetitionExercise />,
  },
  {
    path: "/timer",
    element: <DurationExercise/>,
  },
  {
    path: "/lap",
    element: <RunningExercise />,
  }
], {basename: "/runningExercise"}

);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  /*<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/repetitionexercise" element={<RepetitionExercise />}/>
      <Route path="/timer" element={<DurationExercise />}/>
      <Route path="/lap" element={<RunningExercise />}/>
    </Routes>
  </BrowserRouter>,*/
  document.getElementById("root")
);

