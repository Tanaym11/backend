import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditStudent extends Component{
    constructor(props){
        super(props);


        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeYear_of_batch = this.onChangeYear_of_batch.bind(this);
        this.onChangeCollege_id = this.onChangeCollege_id.bind(this);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Year_of_batch: 0,
            College_id: '',
            Skills: [],
            colleges:[{Name:'',id:''}]
        }


    }
    

    componentDidMount(){
        axios.get('http://localhost:5000/students/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                Name: response.data.Name,
                Year_of_batch: response.data.Year_of_batch,
                College_id: response.data.College_id,
                Skills: response.data.Skills
            })
        })
        .catch(function(error){
            console.log(error);
        })

        axios.get('http://localhost:5000/colleges')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    colleges: response.data.map(function(college) {
                        return {Name:college.Name,id:college._id}
                    } )
                })
            }
        })
        
    }

    onChangeName(e){
        this.setState({
            Name: e.target.value
        });
    }

    onChangeYear_of_batch(e){
        this.setState({
            Year_of_batch: e.target.value
        });
    }

    onChangeCollege_id(e){
        this.setState({
            College_id: e.target.value
        });
    }

    onChangeSkills(e){
        this.setState({
            Skills: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const student= {
            Name: this.state.Name,
            Year_of_batch: this.state.Year_of_batch,
            College_id: this.state.College_id,
            Skills: this.state.Skills
        }
        console.log(student)

        axios.post('http://localhost:5000/students/update/'+ this.props.match.params.id, student)
        .then(res => console.log(res.data));

        window.location = "/";
    }
    render(){
        return(
            <div>
                <h3>Edit Student Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.Name}
                        onChange={this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Year_of_batch: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.Year_of_batch}
                        onChange={this.onChangeYear_of_batch}
                        />
                    </div>
                    <div className="form-group">
                        <label>College_id: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.College_id}
                            onChange={this.onChangeCollege_id}>
                                {
                                    this.state.colleges.map(function(college){
                                        return <option
                                        key={college.id}
                                        value={college.id}>
                                            {college.Name}
                                        </option>
                                    })
                                }
                            </select>
                    </div>
                    <div className="form-group">
                        <label>Skills: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.Skills}
                        onChange={this.onChangeSkills}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Student Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}