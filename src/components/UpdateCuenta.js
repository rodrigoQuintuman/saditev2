import React, { Component } from "react";
import { Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { getCuentasPersona,updateCuenta } from '../actions/PersonaActions';

class UpdateCuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abierto: false,
    };
  }

  handleEditCuenta = (e) => {
    e.preventDefault();
    const saldo = this.getSaldo.value;
    const cuentaNueva = {
      saldo: saldo
    };
    this.props.updateCuenta(this.props.cuenta.idCuentaBanco,cuentaNueva);
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
        <button
            className="btn btn-success btn-sm"
            onClick={this.abrirModal}
        >
            Actualizar
        </button>
        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <div className="card">
            <form id="miForm" className="card-body" onSubmit={this.handleEditCuenta}>
              <div className="card-title text-center">
                <h3>Actualizar Saldo</h3>
              </div>
              <div className="form-group">
                Id
                <input
                  id="id"
                  type="text"
                  name="id"
                  className="form-control"
                  defaultValue={this.props.cuenta.idCuentaBanco}
                  disabled
                  ref={(input) => (this.getIdCuenta = input)}
                />
              </div>
              <div className="form-group">
                Ingresa el nuevo saldo
                <input
                  id="nombre"
                  type="text"
                  name="saldo"
                  className="form-control"
                  defaultValue={this.props.cuenta.saldo}
                  required
                  ref={(input) => (this.getSaldo = input)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Aceptar
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
  getCuentasPersona: getCuentasPersona,
  updateCuenta: updateCuenta

};

export default connect(null, mapDispatchToProps)(UpdateCuenta);

