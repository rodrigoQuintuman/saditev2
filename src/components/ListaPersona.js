import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { savePerson} from "../actions/PersonaActions";


class ListaPersona extends Component {
  render() {
    return (
      <div className="row">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id Paciente</th>
              <th scope="col">Nombre</th>
              <th scope="col">Rut</th>
              <th scope="col">Telefono</th>
              <th scope="col">Tipo Monitoreo</th>
              <th scope="col">Vigilancia</th>
              <th scope="col">Ver Detalle</th>
            </tr>
          </thead>
          <tbody className="thead-light">
            {this.props.pacientes.map((persona) => (
              <tr>
                <th scope="row">{persona.idPaciente}</th>
                <th>
                  {persona.nombre} {persona.apellido}
                </th>
                <th>{persona.rut} </th>
                <th>{persona.telefono} </th>
                <th>Covid Positivo </th>
                <th>No Disponible </th>
                <th>
                  <Link to="/verPaciente/"
                    to={{
                      pathname: "/verPaciente",
                      search: "?id="+persona.idPaciente
                    }}
                  >
                    <button 
                      className="btn btn-info float-right"
                      type="button"
                    >
                      Ver
                    </button>
                  </Link>

                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pacientes: state.persons.pacientes,
  };
};

const mapDispatchToProps = {
  savePerson: savePerson,
};

export default connect(mapStateToProps,mapDispatchToProps)(ListaPersona);
