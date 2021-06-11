import React, { Component } from "react";
import { connect } from "react-redux";
import { addPaciente } from "../actions/PersonaActions";
import { Link } from "react-router-dom";

class AddPersona extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const idPaciente = 0;
    const nombre = this.getNombre.value;
    const apellido = this.getApellido.value;
    const rut = this.getRut.value;
    const telefono = this.getTelefono.value;
    const correo = this.getCorreo.value;
    const idDireccion = 0;
    const nombreCalle = this.getCalle.value;
    const numeroCalle = this.getNumCalle.value;
    const idComuna = this.getComuna.value;
    const idMunicipalidad = 1;
    const idGrupoRiesgo = 1;
    const pacienteNuevo = {
      idPaciente,
      nombre,
      apellido,
      rut,
      telefono,
      correo,
      idDireccion,
      nombreCalle,
      numeroCalle,
      idComuna,
      idMunicipalidad,
      idGrupoRiesgo,
    };
    console.log("antes de this.props.addPaciente(pacienteNuevo)");
    console.log(pacienteNuevo);
    this.props.addPaciente(pacienteNuevo);
    console.log("despues de this.props.addPaciente(pacienteNuevo)");
    this.getNombre.value = "";
    this.getApellido.value = "";
    this.getRut.value = "";
    this.getTelefono.value = "";
    this.getCorreo.value = "";
    this.getCalle.value = "";
    this.getNumCalle.value = "";
    this.getComuna.value = "";
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark justify-content-center">
          <h1 className="text-white">SADITE</h1>
        </nav>
        <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <div className="card">
                <h5 className="text-center my-4">Nuevo Paciente</h5>
                <form className="form-card" onSubmit={this.handleSubmit}>
                  <div className="row justify-content-between text-left px-4">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Nombre<span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="text"
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        required
                        ref={(input) => (this.getNombre = input)}
                      />{" "}
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Apellido<span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="text"
                        name="apellido"
                        placeholder="Ingresa tu apellido"
                        required
                        ref={(input) => (this.getApellido = input)}
                      />{" "}
                    </div>
                  </div>
                  <div className="row justify-content-between text-left px-4">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Rut<span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="text"
                        name="rut"
                        placeholder="Ingresa tu rut"
                        maxLength="9"
                        minLength="8"
                        required
                        ref={(input) => (this.getRut = input)}
                      />{" "}
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Fecha Nacimiento<span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="date"
                        id="mob"
                        name="fechaN"
                        ref={(input) => (this.getFecha = input)}
                      />{" "}
                    </div>
                  </div>
                  <div className="row justify-content-between text-left px-4">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Telefono<span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="tel"
                        name="telefono"
                        placeholder="Ingresa tu telefono"
                        required
                        pattern="[0-9]{9}"
                        ref={(input) => (this.getTelefono = input)}
                      />{" "}
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Correo<span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="eamil"
                        name="correo"
                        placeholder="Ingresa tu correo"
                        required
                        ref={(input) => (this.getCorreo = input)}
                      />{" "}
                    </div>
                  </div>
                  <div className="row justify-content-between text-left px-4">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Region<span className="text-danger"> *</span>
                      </label>{" "}
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        ref={(select) => (this.getRegion = select)}
                      >
                        <option selected>Region</option>
                        <option value="1">Metropolitana</option>
                      </select>{" "}
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Comuna<span className="text-danger"> *</span>
                      </label>{" "}
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        ref={(select) => (this.getComuna = select)}
                      >
                        <option selected>Comuna</option>
                        <option value="1">Santiago</option>
                        <option value="2">Cerrillos</option>
                      </select>{" "}
                    </div>
                  </div>
                  <div className="row justify-content-between text-left px-4">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Calle<span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="text"
                        placeholder="Calle"
                        required
                        ref={(input) => (this.getCalle = input)}
                      />{" "}
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Numero Calle<span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="number"
                        placeholder="Nº Calle"
                        min="1"
                        max="9999"
                        required
                        ref={(input) => (this.getNumCalle = input)}
                      />{" "}
                    </div>
                  </div>
                  <div className="row justify-content-between text-left px-4">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Fecha Inicio Monitoreo
                        <span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="date"
                        name="fechaInicio"
                        ref={(input) => (this.getfechaInicio = input)}
                      />{" "}
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Fecha Inicio Monitoreo
                        <span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="date"
                        name="fechaTermino"
                        ref={(input) => (this.getfechaTermino = input)}
                      />{" "}
                    </div>
                  </div>
                  <div className="row justify-content-between text-left px-4">
                    <div className="form-group col-12 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Tipo Monitoreo
                        <span className="text-danger"> *</span>
                      </label>{" "}
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        ref={(select) => (this.getTipoMonitoreo = select)}
                      >
                        <option selected>Tipo Monitoreo</option>
                        <option value="1">Covid Positivo</option>
                        <option value="2">Sospecha de Covid </option>
                        <option value="3">Adulto Mayor</option>
                        <option value="4">Otro Tipo Apoyo</option>
                      </select>{" "}
                    </div>
                  </div>
                  <div className="text-left">
                    <label className="form-control-label px-4">
                      Otros a Considerar
                      <span className="text-danger"> *</span>
                    </label>
                  </div>
                  <div className="row justify-content-between text-left px-4">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <input
                        type="checkbox"
                        id="alimento"
                        name="alimento"
                        value="alimento"
                      />
                      <label for="alimento"> Alimento</label>
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <input
                        type="checkbox"
                        id="insumos"
                        name="vehicle2"
                        value="insumos"
                      />
                      <label for="insumos"> Insumos basicos</label>{" "}
                    </div>
                  </div>
                  <div className="container pb-4">
                    <div class="row align-items-center">
                      <div class="col">
                        <button
                          type="submit"
                          className="col btn-block btn-success"
                        >
                          Registrar
                        </button>
                      </div>
                      <div class="col">
                        <button
                          type="reset"
                          className="col btn-block btn-info"
                        >
                          Limpiar
                        </button>
                      </div>
                      <div class="col">
                      <Link to="/menu">
                          <button
                          type="button"
                          className="col btn-block btn-primary"
                        >
                          Volver
                        </button>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </form>
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
  addPaciente: addPaciente,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPersona);
