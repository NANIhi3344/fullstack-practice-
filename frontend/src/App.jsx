import React from "react";
import StudentList  from "./component/StudentList.jsx";
import StudentFrom from "./component/StudentForm.jsx";
import "./App.css";

const App = () => {
  return (
    <div className = "app-container">
      <h1> Student Management System </h1>
      < StudentFrom />
      < StudentList />
      </div>
  );
};

export default App;


