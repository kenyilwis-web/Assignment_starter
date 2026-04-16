import React from 'react';
import '../styles/StudentCard.css';

function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <div className="card-header">
        <h3>{student.name}</h3>
        <span className="student-id">ID: {student.id}</span>
      </div>
      <div className="card-body">
        <p>
          <strong>Course:</strong> {student.course || 'N/A'}
        </p>
      </div>
      <div className="card-actions">
        <button
          className="btn-edit"
          onClick={() => onEdit(student)}
          title="Edit student"
        >
          ✎ Edit
        </button>
        <button
          className="btn-delete"
          onClick={() => onDelete(student.id)}
          title="Delete student"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
