import React from "react";
import { Link } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

const LoginPage = () => (
  <div className="jumbotron">
    <h1>Enter your log in credentials</h1>
    <form>
      <label>User Name</label> <input></input>{" "}
      <span className="btn btn-lg btn-dark" type="submit">
        Submit
      </span>
    </form>
    <p>Or register as new user</p>
    <Link to="register" className="btn btn-primary btn-lg">
      Register
    </Link>
  </div>
);

export default LoginPage;
