import axios from "axios";
import urlApi from "../util/api";

export const UPDATE_PACIENTE = "UPDATE_PERSONA";
export const ADD_PACIENTE = "ADD_PACIENTE";
export const DELETE_PACIENTE = "DELETE_PACIENTE";
export const SHOW_ALL_PACIENTES = "SHOW_ALL_PACIENTES";
export const GET_PACIENTE = "GET_PACIENTE";
export const GET_CUENTAS_PERSONA = "GET_CUENTAS_PERSONA";
export const ADD_CUENTA = "ADD_CUENTA";
export const SAVE_PERSON = "SAVE_PERSON";
export const DELETE_CUENTA = "DELETE_CUENTA";
export const UPDATE_CUENTA = "UPDATE_CUENTA";
export const ERROR = "ERROR";

export function updatePaciente(id, personaEdit) {
  return (dispatch) => {
    axios
      .put(urlApi.urlUpdadtePaciente + id, personaEdit)
      .then((response) => {
        console.log(response.status);
        dispatch({
          type: UPDATE_PACIENTE,
          id: id,
          personaEdit: personaEdit,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function addPaciente(pacienteNuevo) {
  return (dispatch) => {
    axios
      .post(urlApi.urlAddPaciente, pacienteNuevo)
      .then((response) => {
        console.log("Dentro de addPaciente");
        console.log(response.status);
        console.log(response);
        console.log(pacienteNuevo);
        const paciente = {
          idPaciente: response.data,
          nombre: pacienteNuevo.nombre,
          apellido: pacienteNuevo.apellido,
          rut: pacienteNuevo.rut,
          telefono: pacienteNuevo.telefono, 
          correo: pacienteNuevo.correo,
          idDireccion: pacienteNuevo.idDireccion,
          nombreCalle: pacienteNuevo.nombreCalle,
          numeroCalle: pacienteNuevo.numeroCalle,
          idComuna: pacienteNuevo.idComuna,
          idMunicipalidad: pacienteNuevo.idMunicipalidad,
          idGrupoRiesgo: pacienteNuevo.idGrupoRiesgo,
        };
        dispatch({
          type: ADD_PACIENTE,
          paciente,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function deletePaciente(id) {
  return (dispatch) => {
    axios
      .delete(urlApi.urlDeletePaciente + id)
      .then((response) => {
        console.log(response.status);
        console.log("dentro de PersonaACtion delte");
        dispatch({
          type: DELETE_PACIENTE,
          id: id,
        });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: ERROR,
          errorDeleting: true
        });
      });
  };
}

export function acceptErrorDeleting() {
  return (dispatch) => {
        dispatch({
          type: ERROR,
          errorDeleting: false
        });
  };
}

export function getAllPacientes() {
  return (dispatch) => {
    axios
      .get(urlApi.urlGetAllPacientes)
      .then((response) => {
        console.log("dentro de getAllPacientes");
        console.log(response.status);
        console.log(response.data.items);
        dispatch({
          type: SHOW_ALL_PACIENTES,
          pacientes: response.data.items
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function getPaciente(id) {
  return (dispatch) => {
    axios
      .get(urlApi.urlGetPaciente + id)
      .then((response) => {
        console.log("dentro de getPacientes");
        console.log(response.status);
        console.log(response);
        let items = [response.data];
        dispatch({
          type: GET_PACIENTE,
          pacientes: items
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function getCuentasPersona(id) {
  return (dispatch) => {
    axios
      .get(urlApi.urlGetCuentasPersona(id))
      .then((response) => {
        dispatch({
          type: GET_CUENTAS_PERSONA,
          cuentas: response.data.items,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function addCuenta(id, cuentaNueva) {
  return (dispatch) => {
    axios
      .post(urlApi.urlAddCuenta(id), cuentaNueva)
      .then((response) => {
        console.log(response.status);
        const cuenta = {
          idCuentaBanco: response.data,
          saldo: cuentaNueva.saldo,
        };
        dispatch({
          type: ADD_CUENTA,
          cuenta,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function savePerson(person) {
  return (dispatch) => {
    dispatch({
      type: SAVE_PERSON,
      person: person,
    });
  };
}

export function deleteCuenta(id) {
  return (dispatch) => {
    axios
      .delete(urlApi.urlDeleteCuenta + id)
      .then((response) => {
        console.log(response.status);
        dispatch({
          type: DELETE_CUENTA,
          id: id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function updateCuenta(id, cuentaEdit) {
  return (dispatch) => {
    axios
      .put(urlApi.urlUpdadteCuenta + id, cuentaEdit)
      .then((response) => {
        console.log(response.status);
        dispatch({
          type: UPDATE_CUENTA,
          id: id,
          cuentaEdit: cuentaEdit,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
