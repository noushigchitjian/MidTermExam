import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class showVaccineDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccine: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3500/api/vaccines/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          vaccine: res.data,
        });
      })
      .catch((err) => {
        console.log("");
      });
  }

  onDeleteClick(id) {
    axios
      .delete("http://localhost:3500/api/vaccines/" + id)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("");
      });
  }

  render() {
    const vaccine = this.state.vaccine;
    if (vaccine.cancelled === true) {
      var myBool = "true";
    } else {
      var myBool = "false";
    }
    let VaccineItem = (
      <div>
        <table className="table table-hover">
          <thead className="table-success">
            <th>#</th>
            <th>Status</th>
            <th>Vaccine Details</th>
            <th>
              <div>
                <Link
                  to={`/edit-vaccine/${vaccine._id}`}
                  className="btn btn-dark"
                >
                  Edit Vaccine
                </Link>
              </div>
            </th>
            <th>
              <div>
                <Link to="/" className="btn btn-info ">
                  Show Vaccine List
                </Link>
              </div>
            </th>
            <th>
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.onDeleteClick.bind(this, vaccine._id)}
                >
                  Delete Vaccine
                </button>
              </div>
            </th>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Card Number</td>
              <td>{vaccine.cardNumber}</td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Vaccine Site</td>
              <td>{vaccine.vaccineSite}</td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Priority Area</td>
              <td>{vaccine.priorityArea}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Date Time</td>
              <td>{vaccine.dateTime}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Cancelled</td>
              <td>{myBool}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className="ShowVaccineDetails">
        <div className="container">
          <div className="row">
            <br />
            <div className="col-md-8 m-auto">
              <b>
                <h1 className="display-3 text-center">
                  Vaccine Appointment Details
                </h1>
              </b>
              <hr /> <br />
            </div>
          </div>
          <div>{VaccineItem}</div>
        </div>
      </div>
    );
  }
}

export default showVaccineDetails;
