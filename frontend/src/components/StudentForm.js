import React, { useState, useEffect } from 'react';
import '../styles/StudentForm.css';

function StudentForm({ onSubmit, initialData, isEditing, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        course: initialData.course || '',
      });
    } else {
      setFormData({
        name: '',
        course: '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter a student name');
      return;
    }
    if (!formData.course.trim()) {
      alert('Please enter a course');
      return;
    }
    onSubmit(formData);
    setFormData({ name: '', course: '' });
  };

  const handleCancel = () => {
    setFormData({ name: '', course: '' });
    onCancel();
  };

  return (
    <div className="form-container">
      <h2>{isEditing ? 'Edit Student' : 'Add New Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Student Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course *</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course name"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {isEditing ? 'Update Student' : 'Add Student'}
          </button>
          {isEditing && (
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
