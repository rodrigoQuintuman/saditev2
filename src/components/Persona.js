import React, { Component } from "react";
import { connect } from "react-redux";
import UpdatePersona from "./UpdatePersona";
import {
  deletePaciente,
  savePerson,
  acceptErrorDeleting,
  getPaciente,
} from "../actions/PersonaActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

class Persona extends Component {
  constructor(props) {
    super(props);
    const idaa = getParameterByName("id");
    this.props.getPaciente(idaa);
  }
  handleSubmit = (e) => {
    this.props.deletePaciente(this.props.pacientes[0].idPaciente);
    window.location.href = "/lista";
  };

  acceptError = (e) => {
    this.props.acceptErrorDeleting();
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
        <nav className="navbar navbar-dark bg-dark justify-content-center">
          <h1 className="text-white">SADITE</h1>
        </nav>
        <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <div className="card">
                <h5 className="text-center my-4">Detalle Paciente</h5>
                <div className="row justify-content-between text-left px-4">
                  <div className="form-group col-sm-12 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Datos Paciente
                    </label>
                  </div>
                </div>
                <div className="row justify-content-between text-left px-4">
                  <div className="form-group col-sm-4 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Id:
                      <span className="font-weight-bold">
                        {" "}
                        {this.props.pacientes[0].idPaciente}
                      </span>
                    </label>{" "}
                  </div>
                  <div className="form-group col-sm-4 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Nombre:{" "}
                      <span className="font-weight-bold">
                        {" "}
                        {this.props.pacientes[0].nombre}{" "}
                        {this.props.pacientes[0].apellido}
                      </span>
                    </label>{" "}
                  </div>
                  <div className="form-group col-sm-4 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Rut:{" "}
                      <span className="font-weight-bold">
                        {" "}
                        {this.props.pacientes[0].rut}
                      </span>
                    </label>{" "}
                  </div>
                </div>
                <div className="row justify-content-between text-left px-4">
                  <div className="form-group col-sm-4 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Edad:
                      <span className="font-weight-bold"> no disponible</span>
                    </label>{" "}
                  </div>
                  <div className="form-group col-sm-4 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Telefono:{" "}
                      <span className="font-weight-bold">
                        {" "}
                        {this.props.pacientes[0].telefono}
                      </span>
                    </label>{" "}
                  </div>
                  <div className="form-group col-sm-4 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Correo:{" "}
                      <span className="font-weight-bold">
                        {" "}
                        {this.props.pacientes[0].correo}
                      </span>
                    </label>{" "}
                  </div>
                </div>
                <div className="row justify-content-between text-left px-4">
                  <div className="form-group col-12 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Direccion
                      <span className="font-weight-bold">
                        {" "}
                        {this.props.pacientes[0].nombreCalle}{" "}
                        {this.props.pacientes[0].numeroCalle}{" "}
                        {this.props.pacientes[0].idComuna}
                      </span>
                    </label>{" "}
                  </div>
                </div>
                <div className="row justify-content-between text-left px-4">
                  <div className="form-group col-sm-12 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Datos Monitoreo
                    </label>
                  </div>
                </div>
                <div className="row justify-content-between text-left px-4">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Tipo Monitoreo:
                      <span className="font-weight-bold">No disponible</span>
                    </label>{" "}
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Vigilancia:{" "}
                      <span className="font-weight-bold">No disponible</span>
                    </label>{" "}
                  </div>
                </div>
                <div className="row justify-content-between text-left px-4">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Alimento:
                      <span className="font-weight-bold">No disponible</span>
                    </label>{" "}
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Insumos Basicos:{" "}
                      <span className="font-weight-bold">No disponible</span>
                    </label>{" "}
                  </div>
                </div>
                <div className="container pb-4">
                  <div class="row align-items-center">
                    <div class="col">
                      <UpdatePersona persona={this.props.pacientes[0]} />
                    </div>
                    <div class="col">
                      <button
                        className="col btn-danger"
                        onClick={this.handleSubmit}
                      >
                        Delete
                      </button>
                    </div>
                    <div class="col">
                      <Link to="/lista" > <button
                        type="button"
                        className="col btn-block btn-primary"
                      >
                        Volver
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={this.props.errorDeleting} style={modalStyles}>
          <ModalHeader>Error al eliminar</ModalHeader>
          <ModalBody>
            No pudimos eliminar a la persona, verifica que NO tenga cuentas
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.acceptError}>
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = {
  acceptErrorDeleting: acceptErrorDeleting,
  getPaciente: getPaciente,
  deletePaciente: deletePaciente,
};

const mapStateToProps = (state) => {
  return {
    errorDeleting: state.persons.errorDeleting,
    pacientes: state.persons.pacientes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persona);

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
