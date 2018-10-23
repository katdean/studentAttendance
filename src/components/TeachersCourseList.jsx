import React, { Component } from "react";


class TeachersCourseList extends Component {
  constructor(){
    super();

    this.state = {
      courseList:[
        "Math 100",
        "English 200",
         "History 301",
      "Science 405"

      ],

      teacherList:[
        { name: "Mr. Smith", id: 123},
        { name: "Ms. Jones", id: 456 },
        { name: "Mrs. Gonzalez", id: 789}
      ]
    };

    this.submitCourse = this.submitCourse.bind(this);
  }

  submitCourse() {
    alert("Submitted");
  };

  render(){
    return (
      <main>
          <header id="teacherview">{this.state.teacherList[1].name}</header>
            <h2>Teacher ID: {this.state.teacherList[1].id}</h2>
            <form id="courseform">
            <select name="coursename">
              <option value="---">Choose a Course </option>
              {
                this.state.courseList.map((courseName, _index)=> {
                  return (
                    <option value={courseName}>
                      {courseName}
                    </option>
                  )
                })
              }
            </select>
            <button type="submit" onClick={ this.submitCourse}>Submit</button>
          </form>
      </main>
    )
  }
}

export default TeachersCourseList;
