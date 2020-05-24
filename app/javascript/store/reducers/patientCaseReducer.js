import {
  FETCH_PATIENT_CASES,
  FETCH_PATIENT_CASE,
  SET_PATIENT_CASE_FILTERS,
  APPEND_PATIENT_CASES,
  APPEND_PATIENT_CASE
} from '../actions/types'

const initialState = {
  patientCaseFilters: {
    status: 'taken'
  },
  patientCases: [],
  patientCase: null,
  meta: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENT_CASES:
      return {
        ...state,
        patientCases: action.payload.data,
        meta: action.payload.meta
      };
    case APPEND_PATIENT_CASES:
      return {
        ...state,
        patientCases: [
          ...state.patientCases,
          ...action.payload.data
        ],
        meta: action.payload.meta
      }
    case APPEND_PATIENT_CASE:
      if (action.payload.attributes.status !== state.patientCaseFilters.status) {
        return state;
      }
      return {
        ...state,
        patientCases: [
          ...state.patientCases,
          action.payload
        ]
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
