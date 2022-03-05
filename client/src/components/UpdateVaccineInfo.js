import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class UpdateVaccineInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      vaccineSite: "",
      priorityArea: "",
      dateTime: "",
      cancelled: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3500/api/vaccines/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          cardNumber: res.data.cardNumber,
          vaccineSite: res.data.vaccineSite,
          priorityArea: res.data.priorityArea,
          dateTime: res.data.dateTime,
          cancelled: res.data.cancelled,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateVaccineInfo");
      });
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
      .put(
        "http://localhost:3500/api/vaccines/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/show-vaccine/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Vaccine Info can't be updated");
      });
  };

  render() {
    return (
      <div className="UpdateVaccineInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Vaccine</h1>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
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
                <label htmlFor="vaccineSite">Vaccine Site</label>
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
                <label htmlFor="priorityArea">Priority Area</label>
                <input
                  type="text"
                  placeholder='priorityArea ("80+", "healthcare", "essential")'
                  name="priorityArea"
                  className="form-control"
                  value={this.state.priorityArea}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="dateTime">Date Time</label>
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
                <label htmlFor="cancelled">Cancelled</label>
                <input
                  type="boolean"
                  placeholder="cancelled"
                  name="cancelled"
                  className="form-control"
                  value={this.state.cancelled}
                  onChange={this.onChange}
                />
                <p></p>
                <p></p>
              </div>
              <br></br>
              <button type="submit" className="btn btn-success btn-lg">
                Update Vaccine Info
              </button>
              <div>
                <br />
                <Link to="/" className="btn btn-primary btn-lg">
                  View Vaccine List
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateVaccineInfo;
