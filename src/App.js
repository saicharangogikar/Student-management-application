import React, { useState } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

const App = () => {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleSaveStudent = (student) => {
        if (selectedStudent) {
            setStudents(students.map(s => s.id === student.id ? student : s));
        } else {
            setStudents([...students, student]);
        }
        setSelectedStudent(null);
    };

    return (
        <div>
            <StudentList students={students} onSelectStudent={setSelectedStudent} />
            <StudentForm student={selectedStudent} onSave={handleSaveStudent} />
        </div>
    );
};

export default App;
