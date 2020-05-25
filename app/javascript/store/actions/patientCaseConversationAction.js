import {
  FETCH_PATIENT_CASE_CONVERSATIONS,
  APPEND_PATIENT_CASE_CONVERSATION
} from './types'

export const fetchMessages = (patient_case_id, page = 1) => dispatch => {
  fetch(`/api/patient_cases/${patient_case_id}/patient_case_conversations?page=${page}`)
  .then(response => response.json())
  .then(data => {
    dispatch({ type: FETCH_PATIENT_CASE_CONVERSATIONS, payload: data });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export const sendMessage = (patient_case_id, payload) => dispatch => {
  fetch(`/api/patient_cases/${patient_case_id}/patient_case_conversations`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then(response => response.json())
  .then(data => {
    // dispatch({ type: APPEND_PATIENT_CASE_CONVERSATION, payload: data.data });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export const appendMessage = (payload) => dispatch => {
  dispatch({ type: APPEND_PATIENT_CASE_CONVERSATION, payload: payload.data });
}
