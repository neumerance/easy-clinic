import { FETCH_PATIENT_CASES, FETCH_PATIENT_CASE, SET_PATIENT_CASE_FILTERS } from '../actions/types';

export const fetchPatientCases = params => dispatch => {
  let query = null;
  if (params) {
    query = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  }
  fetch(`/api/patient_cases${query ? ('?'+query) : ''}`).
  then(res => res.json()).
  then(data =>
    dispatch({ type: FETCH_PATIENT_CASES, payload: data.data })
  );
}

export const setPatientCaseFilters = filters => dispatch => {
  dispatch({ type: SET_PATIENT_CASE_FILTERS, payload: filters });
  fetchPatientCases(filters)(dispatch);
}

export const fetchPatientCase = patientId => dispatch => {
  fetch(`/api/patient_cases/${patientId}`).
  then(res => res.json()).
  then(data =>
    dispatch({ type: FETCH_PATIENT_CASE, payload: data.data })
  );
}
