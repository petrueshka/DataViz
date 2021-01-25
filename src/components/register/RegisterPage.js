import React from "react";

const RegisterPage = () => (
  <div>
    <h1>Registration Form</h1>
    <p>Fill in the form to become new user</p>
    <form>
      <label>Name</label> <input type="text" placeholder="first name"></input>{" "}
      <label>Surname</label> <input type="text" placeholder="last name"></input>
      <button type="submit" className="primary-btn btn-lg btn"></button>
    </form>{" "}
  </div>
);

export default RegisterPage;
