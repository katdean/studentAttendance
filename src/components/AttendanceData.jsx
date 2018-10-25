import React from "react";
import TeachersCourseList from "./TeachersCourseList"

class AttendanceData extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        studentList: props.attendanceList,
      };
      this.backToCourse = this.backToCourse.bind(this);
    }

    backToCourse() {
      this.props.history.push(`/`);
      // this.props.history.
      console.log("Submitted");
    }

  render() {
    return (
      <table>
        <thead>
          <th>Student Name</th>
          <th>Attendance Status</th>
        </thead>
        <tbody>
          {
            this.state.studentList.map(function(student, index){
              return (
                <tr>
                  <td>
                    {student.name}
                  </td>
                  <td>
                    {student.isPresent.toString()}
                  </td>
                </tr>);
            }.bind(this))
          }
        </tbody>

        <div class="btn-container"><input
          type="button"
          id="submit-back-to-teachercourse"
          value="Submit"
          onClick = {this.backToCourse}
        />
        </div>
      </table>

    );
  }
}

export default AttendanceData;
