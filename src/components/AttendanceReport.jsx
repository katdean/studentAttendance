import React from "react";
import ReactToPrint from "react-to-print";
import AttendanceData from "./AttendanceData"

class AttendanceReport extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      studentList: this.props.location.state.detail,
    };
  }
  render() {
    return (
      <div class="formData">
        <ReactToPrint
          trigger={() => <a href="#">Print</a>}
          content={() => this.componentRef}
        />
        <AttendanceData history={this.props.history} attendanceList={this.state.studentList} ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default AttendanceReport;
