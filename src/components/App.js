import React from "react";
import { Route, Switch } from "react-router-dom";
import GraphsPage from "./graphs/GraphsPage";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import Header from "./common/Header";
import NoPage from "./NoPage";
import CoursesPage from "./courses/CoursesPage";
import SalesGenerator from "./sales/SalesGenerator";

function App() {
  return (
    <div className="conatiner-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/graphs" component={GraphsPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/sales" component={SalesGenerator} />
        <Route component={NoPage} />
      </Switch>
    </div>
  );
}
export default App;
