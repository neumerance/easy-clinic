import { combineReducers } from 'redux';
import patientCaseReducer from './patientCaseReducer';

export default combineReducers({
  patientCase: patientCaseReducer
});
