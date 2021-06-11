import "../App.css";
import logo from "../logo.svg";
import React, { Component } from "react";
import ListaPersona from "./ListaPersona";
import { connect } from "react-redux";
import { getAllPacientes } from "../actions/PersonaActions";
import SearchPersona from "./SearchPersona";
import { Link } from "react-router-dom";

class VerPacientes extends Component {
  constructor(props) {
    super(props);
    this.props.getAllPacientes();
  }

  componentDidMount() {
    console.log("antes de montar");
    this.props.getAllPacientes();
  }
  actualizar = (e) => {
    this.props.getAllPacientes();
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark justify-content-center">
          <h1 className="text-white">SADITE</h1>
        </nav>
        <div className="container mt-3">
          <h2 className="text-white">Lista Paciente</h2>
          <br />
          <div className="container">
            <div class="row justify-content-between">
              <div class="col-8 row">
                <SearchPersona />
                <button
                  className="btn btn-info ml-3"
                  type="button"
                  onClick={this.actualizar}
                >
                  Actualizar
                </button>
              </div>
              <div class="col-4">
                <Link to="/menu">
                  <button className="btn btn-info" type="button">
                    Volver
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="row justify-content-start mt-4">
            <div class="col-1">
              <span className="badge badge-pill badge-light">
                Total Pacientes: {this.props.pacientes.length}
              </span>
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-9">
              <ListaPersona />
            </div>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  pacientes: state.persons.pacientes,
});

const mapDispatchToProps = {
  getAllPacientes: getAllPacientes,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerPacientes);
