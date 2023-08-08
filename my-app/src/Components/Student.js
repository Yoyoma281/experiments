import PropTypes from 'prop-types'
import StudentModel from '../Models/Student';
import EditStudent from './Editor';
import { useState } from 'react';

export default function Student(props){
    const [student, setStudent] = useState(props.student);
    const [showEditor, setShowEditor] = useState(false);

  const toggleEditor = () => {
    setShowEditor(!showEditor);
  }

    let GenderImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Female_icon.svg/920px-Female_icon.svg.png";

    if (student.gender === "m"){
        GenderImage = "https://cdn-icons-png.flaticon.com/512/3439/3439472.png";
    }
    

    let ageColor = student.age >= 10 ? "green" : "orange";

    const onChangeHandler = (e) => {
        setStudent({
            ...student,
            [e.target.name] : e.target.value
        });
    };

    return (
        <div>
          <h1>{student.firstname}</h1>
          <h2>{student.lastname}</h2>
          <h3 style={{ color: ageColor }}>{student.age}</h3>
          <h4>
            <img src={GenderImage} alt="gender" height={30} width={30} />
          </h4>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleEditor(); }}>
            <img src={student.image} width={400} alt={student.firstname} />
          </a>
          
          {showEditor ? <EditStudent student={student} onchange={onChangeHandler} /> : null}
        </div>
      );
}
      


Student.propTypes = {
    student: PropTypes.instanceOf(StudentModel).isRequired
};

Student.defaultProps = {
    student: new StudentModel()
};