import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import VaccineCard from "./VaccineCard";

class ShowVaccineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccines: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3500/api/vaccines")
      .then((res) => {
        this.setState({
          vaccines: res.data,
        });
      })

      .catch((err) => {
        console.log("");
      });
  }

  render() {
    const vaccines = this.state.vaccines;
    console.log("PrintVaccine: " + vaccines);

    let vaccineList;

    if (!vaccines) {
      vaccineList = "";
    } else {
      vaccineList = vaccines.map((vaccine, k) => (
        <VaccineCard vaccine={vaccine} key={k} />
      ));
    }

    return (
      <div className="ShowVaccineList">
        <h2 className="display-4 text-center">Vaccination Details</h2>
        <Link to="/create-vaccine" className="btn btn-primary btn-lg btn-block">
          Add Vaccine
        </Link>
        ;
        <div className="form-group">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <br />
              </div>
            </div>
            <div className="list">{vaccineList}</div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default ShowVaccineList;
