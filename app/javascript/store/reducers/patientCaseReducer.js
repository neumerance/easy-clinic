import { FETCH_PATIENT_CASES, FETCH_PATIENT_CASE, SET_PATIENT_CASE_FILTERS } from '../actions/types'

const initialState = {
  patientCaseFilters: {
    status: 'taken'
  },
  patientCases: [],
  patientCase: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENT_CASES:
      return {
        ...state,
        patientCases: action.payload
      };
    case FETCH_PATIENT_CASE:
      return {
        ...state,
        patientCase: action.payload
      };
    case SET_PATIENT_CASE_FILTERS:
      return {
        ...state,
        patientCaseFilters: action.payload
      }
    default:
      return state;
  }
}
