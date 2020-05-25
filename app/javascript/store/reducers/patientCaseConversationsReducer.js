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
    case APPEND_PATIENT_CASE_CONVERSATION:
      return {
        ...state,
        conversations: [
          action.payload,
          ...state.conversations,
        ]
      }
    default:
      return state;
  }
}
