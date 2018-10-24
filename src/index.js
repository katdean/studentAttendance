import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import CourseAttendance from './components/CourseAttedance'
import TeachersCourseList from './components/TeachersCourseList'
import AttendanceReport from './components/AttendanceReport'
// import * as serviceWorker from './serviceWorker';
//
//
// ReactDOM.render(<Main />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

const Root = () =>{
  return(
    <BrowserRouter>
      <div>
        <Route exact path="/" component= { TeachersCourseList } />
        <Route path="/course/:course_id" component={ CourseAttendance } />
        <Route path="/report" component={ AttendanceReport } />
      </div>
    </BrowserRouter>
  )
}

render( <Root />, document.querySelector("#root"));
