import React from "react";
import ReactToPrint from "react-to-print";
import AttendanceData from "./AttendanceData"

class AttendanceReport extends React.Component {
  render() {
    return (
      <div class="formData">
        <ReactToPrint
          trigger={() => <a href="#">Print</a>}
          content={() => this.componentRef}
        />
        <AttendanceData attendanceList={this.props.location.state.detail} ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default AttendanceReport;
