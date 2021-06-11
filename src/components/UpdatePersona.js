import React, { Component } from "react";
import { Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { updatePaciente, getAllPacientes } from '../actions/PersonaActions';

class UpdatePersona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abierto: false,
    };
  }

  componentWillUnmount() {
    this.props.getAllPacientes();
    console.log("desmon up");
  }

  handleEdit = (e) => {
    e.preventDefault();
    const nombre = this.getNombre.value;
    const apellido = this.getApellido.value;
    const rut = this.getRut.value;
    const telefono = this.getTelefono.value;
    const correo = this.getCorreo.value;
    const personaEdit = {
      nombre,
      apellido,
      rut,
      telefono,
      correo,
    };
    this.props.updatePaciente(this.props.persona.idPaciente,personaEdit);
    this.setState({ abierto: false });
    //window.location.href = "/lista";

  };
  
  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {
    const modalStyles = {
      position: "absolute",
      top: "40%",
      left: "50%",
      width : "200%",
      transform: "translate(-50%, -50%)",
    };
    return (
      <>
        <button
            className="col btn-success"
            onClick={this.abrirModal}
          >
            Editar
        </button>
        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <div className="container">
            <form id="miForm" className="form-horizontal" onSubmit={this.handleEdit}>
              <div className="text-center">
                <h3>Editar Paciente </h3>
              </div>
              <div className="form-group">
              <label class="control-label col-sm-3" for="id">Id:</label>
                <input
                  id="id"
                  type="text"
                  name="id"
                  defaultValue={this.props.persona.idPaciente}
                  className="col-sm-9"
                  disabled
                />
              </div>
              <div className="form-group">
              <label class="control-label col-sm-3" for="nombre">Nombre:</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  defaultValue={this.props.persona.nombre}
                  className="col-sm-9"
                  required
                  ref={(input) => (this.getNombre = input)}
                />
              </div>
              <div className="form-group">
              <label class="control-label col-sm-3" for="apellido">Apellido:</label>
                <input
                  id="apellido"
                  type="text"
                  name="edad"
                  required
                  defaultValue={this.props.persona.apellido}
                  className="col-sm-9"
                  ref={(input) => (this.getApellido = input)}
                />
              </div>
              <div className="form-group">
              <label class="control-label col-sm-3" for="rut">Rut:</label>
                <input
                  id="rut"
                  type="text"
                  name="edad"
                  required
                  defaultValue={this.props.persona.rut}
                  className="col-sm-9"
                  ref={(input) => (this.getRut = input)}
                />
              </div>
              <div className="form-group">
              <label class="control-label col-sm-3" for="telefono">Telefono:</label>
                <input
                  id="telefono"
                  type="text"
                  name="nombre"
                  defaultValue={this.props.persona.telefono}
                  className="col-sm-9"
                  required
                  ref={(input) => (this.getTelefono = input)}
                />
              </div>
              <div className="form-group">
              <label class="control-label col-sm-3" for="correo">Correo:</label>
                <input
                  id="correo"
                  type="text"
                  name="edad"
                  required
                  defaultValue={this.props.persona.correo}
                  className="col-sm-9"
                  ref={(input) => (this.getCorreo = input)}
                />
              </div>
              <div className="form-group">
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
              </div>
            
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    pacientes: state.persons.pacientes
  }
}

const mapDispatchToProps = {
  updatePaciente: updatePaciente,
  getAllPacientes: getAllPacientes
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePersona);

