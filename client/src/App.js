import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import StudentsList from "./components/students-list.component";
import EditStudent from "./components/edit-student.component";
import CreateStudent from "./components/create-student.component";
import CreateCollege from "./components/create-college.component";
import CollegesList from "./components/colleges_list.component";
import CollegeView from './components/college_view.component';
import StudentView from './components/student_view.component';


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={StudentsList} />
      <Route path="/edit/:id" component={EditStudent} />
      <Route path="/create" component={CreateStudent} />
      <Route path="/college" exact component={CreateCollege} />
      <Route path="/colleges-list" component={CollegesList} />
      <Route path="/view/student/:id" component = {StudentView}/>
      <Route path="/view/college/:id" component = {CollegeView}/>
      </div>
    </Router>  
  );
}

export default App;
