import "../App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Menu extends Component {
  cerrarSesion = (e) => {
    window.location.href = "/";
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark justify-content-center">
          <h1 className="text-white">SADITE</h1>
        </nav>
        <div class="row justify-content-between my-5">
          <div class="col-4">
            <label className="font-weight-bold">Funcionario: Admin</label>{"    "}
            <label className="font-weight-bold">Municipalidad: No disponible</label>
          </div>
          <div class="col-4"> 
          <button
            className="btn btn-info"
            type="button"
            onClick={this.cerrarSesion}
          >
            Cerrar Sesion
          </button>
          </div>
        </div>
        <div className="container mt-5">
          <div className="m-0 row justify-content-center align-items-center">
            <div className="col-auto p-5 text-center mt-5">
              <Link to="/lista">
                <button
                  className="btn btn-info float-right btn-lg m-1"
                  type="button"
                >
                  Ver Pacientes
                </button>
              </Link>
              <Link to="/agregar">
                <button
                  className="btn btn-info float-right btn-lg m-1"
                  type="button"
                >
                  Agregar Pacientes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Menu);
