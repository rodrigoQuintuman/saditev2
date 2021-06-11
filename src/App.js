import "./App.css";
import logo from "./logo.svg";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPacientes } from "./actions/PersonaActions";

class App extends Component {
  validarUser = (e) => {
    e.preventDefault();
    const correo = this.getCorreo.value;
    const password = this.getPassword.value;

    if (correo === "ad@inacap.cl" && password === "admin") {
      console.log("Good");
      document.getElementById("userMessage").textContent = "User Valido";
      window.location.href = "/menu";
      this.getCorreo.value = "";
      this.getPassword.value = "";
    } else {
      document.getElementById("userMessage").textContent = "User Invalido";
    }
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark justify-content-center">
          <h1 className="text-white">SADITE</h1>
        </nav>
        <div className="row mb-2 p-5">
          <div className="col-md-6">
            <img src={logo}></img>
            <p className="text-white ml-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-md-6">
          <div className="container">
          <div className="row vh-100 justify-content-center align-items-center">
            <div className="col-auto -bg-light p-5">
              
 <div className="card">
                <form
                  id="miForm"
                  className="card-body"
                  onSubmit={this.validarUser}
                >
                  <div className="card-title text-center">
                    <h2 className="text-black">Inicio Sesion</h2>
                    <br />
                    <span id="userMessage"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Correo"
                      required
                      ref={(input) => (this.getCorreo = input)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contraseña"
                      required
                      ref={(input) => (this.getPassword = input)}
                    />
                  </div>
                  <button
                    className="btn btn-info float-right btn-lg"
                    type="submit"
                  >
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
