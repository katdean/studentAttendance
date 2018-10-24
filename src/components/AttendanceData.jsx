import React from "react";

class AttendanceData extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        studentList: props.attendanceList,
      };
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
      </table>
    );
  }
}

export default AttendanceData;
