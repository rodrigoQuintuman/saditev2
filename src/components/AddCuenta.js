import React, { Component } from "react";
import { Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import {
  addCuenta,
  getCuentasPersona,
} from "../actions/PersonaActions";

class AddCuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abierto: false,
    };
  }

  handleAddCuenta = (e) => {
    e.preventDefault();
    const saldo = this.getSaldo.value;
    const cuentaNueva = {
      saldo: saldo,
    };
    this.props.addCuenta(this.props.persona.idPersona, cuentaNueva);
    this.setState({ abierto: false });
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
    return (
      <>
        <div className="principal">
          <div className="secundario">
            <button
              className="btn btn-primary btn-sm"
              onClick={this.abrirModal}
            >
              Agregar
            </button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <div className="card">
            <form
              id="miForm"
              className="card-body"
              onSubmit={this.handleAddCuenta}
            >
              <div className="card-title text-center">
                <h3>Agregar Cuenta Nueva </h3>
              </div>
              <div className="form-group">
                Ingresa el saldo de tu nueva Cuenta
                <input
                  id="nombre"
                  type="text"
                  name="saldo"
                  className="form-control"
                  required
                  ref={(input) => (this.getSaldo = input)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Agregar
              </button>
              {"  "}
              <button
                type="button"
                onClick={this.abrirModal}
                className="btn btn-danger"
              >
                Cancelar
              </button>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = {
  addCuenta: addCuenta,
  getCuentasPersona: getCuentasPersona,
};

export default connect(null, mapDispatchToProps)(AddCuenta);
