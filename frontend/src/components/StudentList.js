import React from 'react';
import StudentCard from './StudentCard';
import '../styles/StudentList.css';

function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="student-list">
        <p className="no-students">No students found. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="student-list">
      <h2>Students ({students.length})</h2>
      <div className="students-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
