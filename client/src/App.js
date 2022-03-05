import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowVaccineList from "./components/ShowVaccineList";
import UpdateVaccineInfo from "./components/UpdateVaccineInfo";
import CreateVaccine from "./components/CreateVaccine";
import ShowVaccineDetails from "./components/ShowVaccineDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ShowVaccineList} />
          <Route path="/show-vaccine/:id" component={ShowVaccineDetails} />
          <Route path="/create-vaccine" component={CreateVaccine} />
          <Route path="/edit-vaccine/:id" component={UpdateVaccineInfo} />
        </div>
      </Router>
    );
  }
}

export default App;
