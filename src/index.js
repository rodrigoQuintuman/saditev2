import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/Menu';
import AddPersona from './components/AddPersona';
import VerPacientes from './components/VerPacientes';
import Persona from './components/Persona';
import { Provider } from "react-redux";
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const store =  createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
<Provider store={store}>
    <Router>
        <Switch>
            <Route path="/verPaciente" component={Persona} />        
            <Route path="/agregar" component={AddPersona} />
            <Route path="/lista" component={VerPacientes} />
            <Route path="/menu" component={Menu} />
            <Route path="/" component={App} />
        </Switch>
    </Router>
    
</Provider>
, document.getElementById('root'));