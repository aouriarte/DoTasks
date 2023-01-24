import React from "react";
import { Routes, Route } from "react-router-dom";
import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="mmax-w-full m-0 p-8 text-center">
      <Routes>
        <Route path="/" element={<ListTasks />} />
        {/* <Route path="/addTask" element={<AddTask />} /> */}
      </Routes>
    </div>
  );
}

export default App;
