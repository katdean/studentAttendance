import React, { Component } from "react";


class TeachersCourseList extends Component {
  constructor(){
    super();

    this.state = {
      courseList:[
        "Math",
        "English",
         "History",
         "Science"
      ],
      teacherList:[
        { name: "Mr. Smith", id: 123},
        { name: "Ms. Jones", id: 456 },
        { name: "Mrs. Gonzalez", id: 789}
      ],
      selectedCourse: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  getAttendance(event){
    event.preventDefault();
    const  nameForUrl = this.state.selectedCourse;
    this.props.history.push(`/course/${nameForUrl}`);
  }

  handleSelect(event){
    this.setState({
      selectedCourse: event.target.value,
    })
  }

  render(){
    return (
      <main>
          <header id="teacherview">{this.state.teacherList[1].name}</header>
            <h2>Teacher ID: {this.state.teacherList[1].id}</h2>
            <form id="courseform" onSubmit={(e)=>{this.getAttendance(e)}}>
            <select id = "coursebox" name="coursename" onChange={this.handleSelect} required>
              <option value="">Choose a Course </option>
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
            <input type="submit" value="Find My Roster"/>
          </form>
      </main>
    )
  }
}

export default TeachersCourseList;
