import React, { Component } from "react";
import { connect } from "react-redux";
import { getPaciente } from '../actions/PersonaActions';

class SearchPersona extends Component {

handleSearch = (e) => {
    const id = this.getId.value;
    this.props.getPaciente(id);
}

render() {
    return (
        <div className="w-50 input-group">
            <div className="input-group-prepend">
                <button className="btn btn-info" type="button" onClick={this.handleSearch} >Buscar</button>
            </div>
            <input type="number" className="form-control" placeholder="Buscar por ID" ref={(input) => (this.getId = input)}/>
        </div>
    );
  }
}

const mapDispatchToProps = {
    getPaciente: getPaciente
};

export default connect(null,mapDispatchToProps)(SearchPersona);
