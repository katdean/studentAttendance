import React, { Component } from "react";
import TeachersCourseList from "./TeachersCourseList"

class Main extends Component {
  render () {
    return (
      <div>
        <TeachersCourseList/>
      </div>
    )
    // <form action="action_page.php">
    //   <div class="login">
    //   </div>
    //
    //   <div class="container">
    //     <label for="uname"><b>Username</b></label>
    //     <input type="text" placeholder="Enter Username" name="uname" required>
    //
    //     <label for="psw"><b>Password</b></label>
    //     <input type="password" placeholder="Enter Password" name="psw" required>
    //
    //     <button type="submit">Login</button>
    //     <label>
    //       <input type="checkbox" checked="checked" name="remember"> Remember me
    //     </label>
    //   </div>
    //
    //   <div class="container" style="background-color:white">
    //     <button type="button" class="cancelbtn">Cancel</button>
    //     <span class="psw"> <a href="#">Forgot Password</a></span>
    //   </div>
    // </form>

  }
}

export default Main;
