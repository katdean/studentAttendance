import React, { Component } from "react";
import '../css/index.css';

class CourseAttendance extends Component {
  constructor(){
    super();

    this.state = {
    studentList:[
      { "name" : "Kathy Dean",
          "isPresent":false},
      {
        "name" : "Masiel Morillo",
        "isPresent":false},
      {
        "name" : "Pamela Tobon",
        "isPresent":false},
      { "name" : "Kathy Dean",
          "isPresent":false},
      {
        "name" : "Masiel Morillo",
        "isPresent":false},
      {
        "name" : "Pamela Tobon",
        "isPresent":false},
    ]
    };

    this.submitList = this.submitList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let tempStudList = this.state.studentList
    tempStudList.splice(event.target.value, 1, { "name": tempStudList[event.target.value].name, "isPresent":!tempStudList[event.target.value].isPresent })

    this.setState ({
      studentList: tempStudList
    });
  };

  submitList() {
    alert("Submitted");
  };

  getTeacherCourse(event) {
    event.preventDefault ();
    // alert ("Back to Teacher");
    // this.props.history.push(`/`);
    // this.props.history.push(`/report`);
    this.props.history.push({pathname:`/report`, state:{detail: this.state.studentList}});
  }

  render(){
    return (
      <main>
          <header id="courseHeader">Course: {this.props.match.params.course_id}</header>
          <form class="formReport" onSubmit = {(e) => {this.getTeacherCourse(e)}}>
            <ol className="studentList">
              {
                this.state.studentList.map(function(student, index){
                  return (
                    <li>
                      <input  name={`student-${index}`}
                              id={`student-${index}`}
                              type="checkbox"
                              onChange = {this.handleChange}
                              value = {index}
                              />
                      <label htmlFor={`student-${index}`}>
                        {student.name}
                      </label>
                    </li>);
                }.bind(this))
              }

            </ol>
            <div class="btn-container"><input
              type="submit"
              id="submit-student-attendance"
              value="Submit"
            />
            </div>
          </form>
      </main>
    )
  }
}

export default CourseAttendance;
