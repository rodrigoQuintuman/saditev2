import React, { Component } from "react";
import "react-router-dom";
import { getCuentasPersona, deleteCuenta } from "../actions/PersonaActions";
import { connect } from "react-redux";
import AddCuenta from "./AddCuenta";
import UpdateCuenta from "./UpdateCuenta";
import { Link } from "react-router-dom";

class Cuentas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.getCuentasPersona(this.props.person.idPersona);
  }

  handleDeleteCuenta = (idCuentaBanco, e) => {
    this.props.deleteCuenta(idCuentaBanco);
  };

  render() {
    return (
      <div className="mw-100">
        <nav className="navbar navbar-dark bg-dark">
          <span className="badge badge-pill badge-light ml-2">
            Total Cuentas: {this.props.cuentas.length}
          </span>
          <div className="container">
            <h1 className="text-center text-white">CRUD Cuentas</h1>
          </div>
        </nav>
        <div className="d-block float-right mt-1 mr-5">
          <Link to="/">
            <button className="btn btn-info" type="button">
              Volver
            </button>
          </Link>
        </div>
        <div className="container">
          <div className="card ml-5 mr-5 mt-5">
            <div className="card-title text-center">
              <h3>
                {this.props.person.idPersona} - {this.props.person.nombre}
              </h3>
            </div>
            <div className="card-body">
              Total de Cuentas: {this.props.cuentas.length}
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Id Cuenta</th>
                    <th scope="col">Saldo</th>
                    <th scope="col">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cuentas.map((cuenta) => (
                    <tr>
                      <th scope="row">{cuenta.idCuentaBanco}</th>
                      <td>{cuenta.saldo}</td>
                      <td>
                        <button
                          onClick={this.handleDeleteCuenta.bind(
                            this,
                            cuenta.idCuentaBanco
                          )}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>{" "}
                        {"  "}
                        <UpdateCuenta
                          idPersona={this.props.person.idPersona}
                          cuenta={cuenta}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              {/*  <AddCuenta idPersona={this.state.persona.idPersona} /> */}
              <AddCuenta persona={this.props.person} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cuentas: state.persons.cuentas,
  person: state.persons.person,
});

const mapDispatchToProps = {
  getCuentasPersona: getCuentasPersona,
  deleteCuenta: deleteCuenta,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cuentas);
