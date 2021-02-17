import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const College = props => (
    <tr>
        <td>{props.college.Name}</td>
        <td>{props.college.Year_founded}</td>
        <td>{props.college.City}</td>
        <td>{props.college.State}</td>
        <td>{props.college.Country}</td>
        <td>{props.college.No_of_students}</td>
        <td>{props.college.Courses}</td>
        </tr>
)

export default class CollegeView extends Component{
    constructor(props){
        super(props);

        this.state = { colleges: []};
    }

    componentDidMount(){
        axios.get('https://studentapp123123.herokuapp.com/colleges/'+this.props.match.params.id)
        .then(response => {
            this.setState({colleges: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }


    CollegesList(){
        
        return [this.state.colleges].map(currentcollege => {
            return <College college={currentcollege}  key={currentcollege._id}/>; 
        })
    }
    render(){
        return(
            <div>
                <h3>Logged Colleges</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Year_founded</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>No_of_students</th>
                            <th>Courses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.CollegesList()}
                    </tbody>
                </table>
            </div>
        )
    }
}