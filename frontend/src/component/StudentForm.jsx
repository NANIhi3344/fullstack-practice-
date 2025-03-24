import React, {useState} from  "react";
import "./../App.css";

const StudentFrom = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [grade, setGrade] = useState("");

    const Submit = (e) => {
        e.target.value();
        console.log({name, age, grade});
    };

    return (
        <div className= "student-form">
            <h2> Add New Student </h2>
            <form onSubmit={Submit}>
                <input type = "text" placeholder = "Student Name..." onChange = {setName} required/>
                <input type = "number" placeholder = "Enter your age..." onChange = {setAge} required min={0}/>
                <input type = "text" placeholder = "Enter your grade..." onChange = {setGrade} required/>
                <button>Submit</button>
                </form>
                </div>
    );
};

export default StudentFrom;

