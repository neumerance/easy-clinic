import { FETCH_PATIENT_CASES, FETCH_PATIENT_CASE } from '../actions/types'

const initialState = {
  patientCases: [],
  patientCase: []
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
    default:
      return state;
  }
}
