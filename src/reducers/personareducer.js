import {
  ADD_PACIENTE,
  DELETE_PACIENTE,
  UPDATE_PACIENTE,
  SHOW_ALL_PACIENTES,
  GET_PACIENTE,
  GET_CUENTAS_PERSONA,
  ADD_CUENTA,
  SAVE_PERSON,
  DELETE_CUENTA,
  UPDATE_CUENTA,
  ERROR,
} from "../actions/PersonaActions";

const initialState = {
  pacientes: [],
  cuentas: [],
  person: {},
  errorDeleting: false,
  pacienteActual: {} 
};

export const personaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PACIENTE:
      console.log("dentro de personaReducer() addP");
      console.log(action.paciente);
      console.log(action);
      return {
        ...state,
        pacientes: state.pacientes.concat(action.paciente)
      };
    case DELETE_PACIENTE:
      console.log("dentro de personaReducer() delete");
      console.log(action.paciente);
      console.log(action);
      return {
        ...state,
        pacientes: state.pacientes.filter((p) => p.idPaciente !== action.id),
      };
    case UPDATE_PACIENTE:
      return {
        ...state,
        pacientes: state.pacientes.map((p) => {
          if (p.idPaciente === action.id) {
            return {
              ...p,
              nombre: action.personaEdit.nombre,
              apellido: action.personaEdit.apellido,
              rut: action.personaEdit.rut,
              telefono: action.personaEdit.telefono,
              correo: action.personaEdit.correo,
            };
          } else return p;
        }),
      };
    case GET_PACIENTE:
      return {
        ...state,
        pacientes: action.pacientes,
      };
    case SHOW_ALL_PACIENTES:
      return {
        ...state,
        pacientes: action.pacientes,
      };
    case GET_CUENTAS_PERSONA:
      return {
        ...state,
        cuentas: action.cuentas,
      };
    case ADD_CUENTA:
      return {
        ...state,
        cuentas: state.cuentas.concat(action.cuenta),
      };
    case SAVE_PERSON:
      return {
        ...state,
        person: action.person,
      };
    case DELETE_CUENTA:
      return {
        ...state,
        cuentas: state.cuentas.filter((c) => c.idCuentaBanco !== action.id),
      };
    case UPDATE_CUENTA:
      return {
        ...state,
        cuentas: state.cuentas.map((c) => {
          if (c.idCuentaBanco === action.id) {
            return {
              ...c,
              saldo: action.cuentaEdit.saldo,
            };
          } else return c;
        }),
      };
      
    case ERROR:
      return {
        ...state,
        errorDeleting: action.errorDeleting
      };

    default:
      return state;
  }
};
