import React, { Component } from "react";
import '../css/index.css';

class CourseAttendance extends Component {
  constructor(){
    super();

    this.state = {
    studentList:[
      { "name" : "Kathy Dean",
          "isPresent":null},
      {
        "name" : "Masiel Morillo",
        "isPresent":null},
      {
        "name" : "Pamela Tobon",
        "isPresent":null},
      { "name" : "Kathy Dean",
          "isPresent":null},
      {
        "name" : "Masiel Morillo",
        "isPresent":null},
      {
        "name" : "Pamela Tobon",
        "isPresent":null},
    ]
    };

    this.submitList = this.submitList.bind(this);
  }

  submitList() {
    alert("Submitted");
  };

  getTeacherCourse(event) {
    event.preventDefault ();
    // alert ("Back to Teacher");
    this.props.history.push(`/`);
  }

  render(){
    return (
      <main>
          <header id="courseHeader">Course: {this.props.match.params.course_id}</header>
          <form onSubmit = {(e) => {this.getTeacherCourse(e)}}>
            <ol className="studentList">
              {
                this.state.studentList.map(function(student, index){
                  return ( <li><input name={`student-${index}`} id={`student-${index}`} type="checkbox"/> <label htmlFor={`student-${index}`}></label>{student.name}</li>);
                })
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
