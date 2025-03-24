import React from "react";
const StudentItem = ({name, age, grade}) => {
    return (
        <li className = "student-item">
            <h3> Name: {name} </h3>
            <p> Age: {age} </p>
            <p> Grade: {grade} </p>
            </li>
    );
};

export default StudentItem;


