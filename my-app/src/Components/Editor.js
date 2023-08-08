import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StudentModel from '../Models/Student';

export default function EditStudent(props) {
  const [showEditor, setShowEditor] = useState(false);
  const [student, setStudent] = useState(props.student);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentId = props.student.id; 
    const apiUrl = `http://localhost:3001/students/${studentId}`;
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        console.log('Data updated successfully');
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setShowEditor(false);
  };

  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(`http://localhost:3001/students/${studentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Student deleted successfully');
       
      } else {
        console.error('Failed to delete student');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          FirstName: <input type="text" value={student.firstname} onChange={(e) => setStudent({ ...student, firstname: e.target.value })} name="firstname" /><br />
          LastName: <input type="text" value={student.lastname} onChange={(e) => setStudent({ ...student, lastname: e.target.value })} name="lastname" /><br />
          Age: <input type="number" value={student.age} onChange={(e) => setStudent({ ...student, age: parseInt(e.target.value, 10) })} name="age" /><br />
          Gender: <input type="text" value={student.gender} onChange={(e) => setStudent({ ...student, gender: e.target.value })} name="gender" /><br />
          Image: <input type="text" value={student.image} onChange={(e) => setStudent({ ...student, image: e.target.value })} name="image" /><br />
          <button onClick={() => handleDelete(student.id)}>Delete Student</button>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

EditStudent.propTypes = {
  student: PropTypes.instanceOf(StudentModel).isRequired,
};
