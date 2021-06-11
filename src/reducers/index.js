import { combineReducers } from 'redux';
import { personaReducer } from './personareducer'

const rootReducer = combineReducers({
    persons: personaReducer
});

export default rootReducer;