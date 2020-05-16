class PatientCasesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "patient_cases_#{current_user.id}"
  end
end
