import {
  FETCH_PATIENT_CASES,
  FETCH_PATIENT_CASE,
  SET_PATIENT_CASE_FILTERS,
  APPEND_PATIENT_CASES,
  APPEND_PATIENT_CASE,
} from '../actions/types';

const baseFetchPatientCases = (params, action) => dispatch => {
  let query = null;
  if (params) {
    query = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  }
  fetch(`/api/patient_cases${query ? ('?'+query) : ''}`).
  then(res => res.json()).
  then(payload => {
    dispatch({ type: action, payload });
  });
}

export const fetchPatientCases = params => dispatch => {
  baseFetchPatientCases(params, FETCH_PATIENT_CASES)(dispatch);
}

export const loadMorePatientCases = params => dispatch => {
  baseFetchPatientCases(params, FETCH_PATIENT_CASES)(dispatch);
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

export const appendPatientCase = (newPatientCase) => dispatch => {
  dispatch({
    type: APPEND_PATIENT_CASE,
    payload: newPatientCase
  });
}
