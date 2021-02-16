import React, {Component} from 'react';
import axios from 'axios';
export default class CreateColleges extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeYear_founded = this.onChangeYear_founded.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeNo_of_students = this.onChangeNo_of_students.bind(this);
        this.onChangeCourses = this.onChangeCourses.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name:'',
            Year_founded:0,
            City:'',
            State:'',
            Country:'',
            No_of_students:'',
            Courses:[]
        }
    }

    onChangeName(e){
        this.setState({
            Name: e.target.value
        })
    }
    onChangeYear_founded(e){
        this.setState({
            Year_founded: e.target.value
        })
    }
    onChangeCity(e){
        this.setState({
            City: e.target.value
        })
    }
    onChangeState(e){
        this.setState({
            State: e.target.value
        })
    }
    onChangeCountry(e){
        this.setState({
            Country: e.target.value
        })
    }
    onChangeNo_of_students(e){
        this.setState({
            No_of_students: e.target.value
        })
    }
    onChangeCourses(e){
        this.setState({
            Courses:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const college = {
            Name: this.state.Name,
            Year_founded: this.state.Year_founded,
            City: this.state.City,
            State: this.state.State,
            Country: this.state.Country,
            No_of_students: this.state.No_of_students,
            Courses: this.state.Courses
        }

        console.log(college);

        axios.post('http://localhost:5000/colleges/add',college)
            .then(res => console.log(res.data));

        this.setState({
            Name:'',
            Year_founded:0,
            City:'',
            State:'',
            Country:'',
            No_of_students:'',
            Courses:[]
        })

    }
    render(){
        return(
            <div>
                <h3>Create new colleges</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.Name}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Year_founded: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.Year_founded}
                        onChange={this.onChangeYear_founded}
                        />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.City}
                        onChange={this.onChangeCity}
                        />
                    </div>
                    <div className="form-group">
                        <label>State: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.State}
                        onChange={this.onChangeState}
                        />
                    </div>
                    <div className="form-group">
                        <label>Country: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.Country}
                        onChange={this.onChangeCountry}
                        />
                    </div>
                    <div className="form-group">
                        <label>No_of_students: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.No_of_students}
                        onChange={this.onChangeNo_of_students}
                        />
                    </div>
                    <div className="form-group">
                        <label>Courses </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.Courses}
                        onChange={this.onChangeCourses}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create College" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}