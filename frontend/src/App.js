import React, { useState, useEffect } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'http://localhost:5000/students';

  // Fetch all students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE_URL);
      if (!response.ok) throw new Error('Failed to fetch students');
      const data = await response.json();
      setStudents(data);
      setError(null);
    } catch (err) {
      setError('Error loading students: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new student
  const handleAddStudent = async (formData) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to add student');
      await fetchStudents();
      setError(null);
    } catch (err) {
      setError('Error adding student: ' + err.message);
      console.error(err);
    }
  };

  // Update a student
  const handleUpdateStudent = async (id, formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to update student');
      await fetchStudents();
      setEditingStudent(null);
      setError(null);
    } catch (err) {
      setError('Error updating student: ' + err.message);
      console.error(err);
    }
  };

  // Delete a student
  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete student');
        await fetchStudents();
        setError(null);
      } catch (err) {
        setError('Error deleting student: ' + err.message);
        console.error(err);
      }
    }
  };

  const handleEditClick = (student) => {
    setEditingStudent(student);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management System</h1>
      </header>

      <div className="App-container">
        <div className="form-section">
          <StudentForm
            onSubmit={
              editingStudent
                ? (data) => handleUpdateStudent(editingStudent.id, data)
                : handleAddStudent
            }
            initialData={editingStudent}
            isEditing={!!editingStudent}
            onCancel={handleCancelEdit}
          />
        </div>

        <div className="list-section">
          {error && <div className="error-message">{error}</div>}
          {loading ? (
            <p className="loading">Loading students...</p>
          ) : (
            <StudentList
              students={students}
              onEdit={handleEditClick}
              onDelete={handleDeleteStudent}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
