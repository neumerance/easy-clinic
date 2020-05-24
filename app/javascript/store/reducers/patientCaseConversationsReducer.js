import {
  FETCH_PATIENT_CASE_CONVERSATIONS,
  APPEND_PATIENT_CASE_CONVERSATION
} from '../actions/types'

const initialState = {
  conversations: [],
  pagination: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENT_CASE_CONVERSATIONS:
      return {
        ...state,
        conversations: action.payload.data,
        pagination: action.payload.meta.pagination
      };
    default:
      return state;
  }
}
