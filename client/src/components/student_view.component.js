import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Student = props => (
    <tr>
        <td>{props.student.Name}</td>
        <td>{props.student.Year_of_batch}</td>
        <td><Link to={"./view/college/"+props.student.College_id}>{props.student.College_id}</Link></td>
        <td>{props.student.Skills}</td>
    </tr>
)

export default class StudentView extends Component{
    constructor(props){
        super(props);


        this.state = { students: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/students/'+this.props.match.params.id)
        .then(response => {
            this.setState({students: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    

    StudentsList(){
        return [this.state.students].map(currentstudent => {
            return <Student student={currentstudent}  key={currentstudent._id}/>; 
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