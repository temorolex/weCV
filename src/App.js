import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/home_page";
import { Studentdetails } from "./pages/student_details";
import React from "react";
import { createBrowserHistory } from "history";
import { Educationaldetails } from "./pages/educational_details";
import { Extradetails } from "./pages/extra_details";
import { Stepindicator } from "./pages/step_indicator";
import { Projectdetails } from "./pages/project_details";
import { Personaldetails } from "./pages/personal_detail";
import { Finalresume } from "./pages/final_resume";

const newHistory = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={newHistory}>
        <Homepage />
        <br />
        <br />
        <Stepindicator />
        <Switch>
          <Route exact path="/step1">
            <Studentdetails />
          </Route>
          <Route exact path="/step2">
            <Educationaldetails />
          </Route>
          <Route exact path="/step3">
            <Extradetails />
          </Route>
          {/* <Route exact path="/step4">
            <Projectdetails />
          </Route> */}
          <Route exact path="/step4">
            <Personaldetails />
          </Route>
          <Route exact path="/step5">
            <Finalresume />
          </Route>
          <Route exact path="/">
            <Studentdetails />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
