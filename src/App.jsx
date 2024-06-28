import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Controller from "./Pages/scorecontroller";
import Scoreboard from "./Pages/scoreboard";
import Landing from "./Pages/landing";
import Comms from "./Components/comms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/controller" element={<Controller />} />
        <Route path="/comms" element={<Comms />} />
      </Routes>
    </Router>
  );
}

export default App;
