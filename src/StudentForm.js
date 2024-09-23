import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ student, onSave }) => {
    const [name, setName] = useState(student ? student.name : '');
    const [email, setEmail] = useState(student ? student.email : '');
    const [course, setCourse] = useState(student ? student.course : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { name, email, course };
        if (student) {
            axios.put(`/api/students/${student.id}`, newStudent)
                .then(response => onSave(response.data))
                .catch(error => console.error(error));
        } else {
            axios.post('/api/students', newStudent)
                .then(response => onSave(response.data))
                .catch(error => console.error(error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Course"
                required
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default StudentForm;
