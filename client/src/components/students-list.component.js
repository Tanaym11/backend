import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Student = props => (
    <tr>
        <td><Link to={'./view/student/'+props.student._id}>{props.student.Name}</Link></td>
        <td>{props.student.Year_of_batch}</td>
        <td><Link to={'./view/college/'+props.student.College_id}>{props.student.College_id}</Link></td>
        <td>{props.student.Skills}</td>
        <td><Link to={"./edit/"+props.student._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStudent(props.student._id)}}>delete</a> </td>
    </tr>
)

export default class StudentsList extends Component{
    constructor(props){
        super(props);

        this.deleteStudent = this.deleteStudent.bind(this);

        this.state = { students: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/students/')
        .then(response => {
            this.setState({students: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteStudent(id){
        axios.delete('http://localhost:5000/excercises/'+id)
        .then(res=> console.log(res.data));
        this.setState({
            students: this.state.students.filter(el => el._id !==  id)
        })

    }

    StudentsList(){
        return this.state.students.map(currentstudent => {
            return <Student student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id}/>; 
        })
    }
    render(){
        return(
            <div>
                <h3>Logged Students</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Year_of_batch</th>
                            <th>College_id</th>
                            <th>Skills</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.StudentsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}