import { useState, useEffect } from 'react';
import Student from './Student';


function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/students') // Adjust the URL to match your json-server setup
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  
  return (
    <div>
      {students.map((student, index) => (
        <div key={index}> 
          <Student student={student}/>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
