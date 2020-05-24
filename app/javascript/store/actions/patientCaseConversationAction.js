import {
  FETCH_PATIENT_CASE_CONVERSATIONS,
  APPEND_PATIENT_CASE_CONVERSATION
} from './types'

const fetchMessages = (patient_case_id, filters) => dispatch => {
  let query = null;
  if (filters) {
    query = Object.keys(filters).map(key => key + '=' + params[key]).join('&');
  }
  fetch(`/api/patient_cases/${patient_case_id}/patient_case_conversations${query ? `?${query}` : ''}`)
  .then(response => response.json())
  .then(data => {
    dispatch({ type: FETCH_PATIENT_CASE_CONVERSATIONS, payload: data.data });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

const sendMessage = (patient_case_id, payload) => dispatch => {
  fetch(`/api/patient_cases/${patient_case_id}/patient_case_conversations`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then(response => response.json())
  .then(data => {
    dispatch({ type: APPEND_PATIENT_CASE_CONVERSATION, payload: data.data });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
