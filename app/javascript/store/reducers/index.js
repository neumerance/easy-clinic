import { combineReducers } from 'redux';
import patientCaseReducer from './patientCaseReducer';
import patientCaseConversationsReducer from './patientCaseConversationsReducer';

export default combineReducers({
  patientCase: patientCaseReducer,
  patientCaseConversations: patientCaseConversationsReducer
});
