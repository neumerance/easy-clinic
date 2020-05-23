import {
  FETCH_PATIENT_CASES,
  FETCH_PATIENT_CASE,
  SET_PATIENT_CASE_FILTERS
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
      const prevPage = state.meta.pagination ? state.meta.pagination.prev_page : null;
      const currentPage = action.payload.meta.pagination ? action.payload.meta.pagination.current_page : null;
      const append = (prevPage === currentPage);

      return {
        ...state,
        patientCases: append ?
                      [...state.patientCases, ...action.payload.data] :
                      action.payload.data,
        meta: action.payload.meta
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
