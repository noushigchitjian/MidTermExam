import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class CreateVaccine extends Component {
  constructor() {
    super();
    this.state = {
      cardNumber: "",
      vaccineSite: "",
      priorityArea: "",
      dateTime: "",
      cancelled: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      cardNumber: this.state.cardNumber,
      vaccineSite: this.state.vaccineSite,
      priorityArea: this.state.priorityArea,
      dateTime: this.state.dateTime,
      cancelled: this.state.cancelled,
    };

    axios
      .post("http://localhost:3500/api/vaccines", data)
      .then((res) => {
        this.setState({
          cardNumber: "",
          vaccineSite: "",
          priorityArea: "",
          dateTime: "",
          cancelled: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateVaccine!");
      });
  };

  render() {
    return (
      <div className="CreateVaccine">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Vaccination</h1>
              <br></br>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="cardNumber"
                    name="cardNumber"
                    className="form-control"
                    value={this.state.cardNumber}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="vaccineSite"
                    name="vaccineSite"
                    className="form-control"
                    value={this.state.vaccineSite}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder='priorityArea ("80+", "healthcare", or "essential")'
                    name="priorityArea"
                    className="form-control"
                    value={this.state.priorityArea}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    placeholder="dateTime"
                    name="dateTime"
                    className="form-control"
                    value={this.state.dateTime}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="appointment cancelled? (true or false)"
                    name="cancelled"
                    className="form-control"
                    value={this.state.cancelled}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" className="btn btn-success btn-lg" />
                <p></p>
                <div>
                  <Link to="/" className="btn btn-primary btn-lg">
                    Show Vaccine List
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateVaccine;
