import React, { useState } from 'react';
import axios from 'axios';

function AddCourse() {
  const [form, setForm] = useState({ title: '', description: '', instructorId: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/courses/add', form);
      alert('Course added!');
    } catch (err) {
      alert('Error adding course');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>➕ Add Course</h2>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Instructor ID" onChange={e => setForm({ ...form, instructorId: e.target.value })} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddCourse;
