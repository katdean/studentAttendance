import React, { Component } from "react";


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

  render(){
    return (
      <main>
          <header>class: Math 100</header>
          <form>
            <ol>
              {
                this.state.studentList.map(function(student, index){
                  return ( <li><input name={`student-${index}`} id={`student-${index}`} type="checkbox"/> <label htmlFor={`student-${index}`}></label>{student.name}</li>);
                })
              }

            </ol>
            <input
              type="button"
              id="submit-student-attendance"
              value="Submit"
              onClick={ this.submitList}
            />
          </form>
      </main>
    )
  }
}

export default CourseAttendance;
