import React, { useState } from 'react';

export default function AddStudentForm({ onAddStudent }) {
  const [newStudent, setNewStudent] = useState({
    firstname: '',
    lastname: '',
    age: 0,
    gender: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((newStudent) => ({
      ...newStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });

      if (response.ok) {
        console.log('Student added successfully');
        onAddStudent(newStudent); 
        setNewStudent({
          firstname: '',
          lastname: '',
          age: 0,
          gender: '',
          image: '',
        });
      } else {
        console.error('Failed to add student');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <div>
    <h2>Add New Student</h2>
    <form onSubmit={handleSubmit}>
        <div><label>First Name:</label> <input type="text" name="firstname" value={newStudent.firstname} onChange={handleChange} /></div>
        <div><label>Last Name:</label> <input type="text" name="lastname" value={newStudent.lastname} onChange={handleChange} /></div>
        <div><label>Age:</label> <input type="number" name="age" value={newStudent.age} onChange={handleChange} /></div>
        <div><label>Gender:</label> <input type="text" name="gender" value={newStudent.gender} onChange={handleChange} /></div>
        <div><label>Image URL:</label> <input type="text" name="image" value={newStudent.image} onChange={handleChange} /></div>
        <button type="submit">Add Student</button>
    </form>
    </div>

  );
}
