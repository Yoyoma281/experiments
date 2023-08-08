import logo from './logo.svg';
import './App.css';
import { name } from 'tar/lib/types';
import EditStudent from './Components/Editor';
import StudentList from './Components/StudentList';
import StudentModel from './Models/Student';
import Student from './Components/Student';
import AddStudentForm from './Components/AddStudent';

function App() {
  return (
    <div className="App">
     <StudentList/>
     <AddStudentForm/>
    </div>

  );
}

export default App;
