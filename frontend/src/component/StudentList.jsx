import React from 'react';
import StudentItem from "./StudentItem.jsx";    


const StudentData = [
    { id: 1, name: "Alice", age: 20, grade: "A"},
    { id: 2, name: "Bob", age: 20, grade: "B"},
    { id: 3, name: "Charlie", age: 21, grade: "A-"}
];

const StudentList = () => {
    return (
        <div className = 'student-list'>
        <h2> Student List </h2>
        <ul>
        {StudentData.map((student) => (
            <StudentItem key={student.id} name={student.name} age={student.age} grade={student.grade}/>
        ))}
        </ul>
        </div>
    );
};

export default StudentList;

