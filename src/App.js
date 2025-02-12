// App.jsx
import "./App.css";
import React from "react";
import ToDoView from "./screens/ToDoView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoView />} />
      </Routes>
    </Router>
  );
}

export default App;