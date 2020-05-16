class PatientCaseConversationsChannel < ApplicationCable::Channel
  def subscribed
    reject unless patient_case

    stream_from "patient_case_conversations_#{@patient_case.id}" if @patient_case
  end

  private

  def patient_case
    @patient_case = current_user.patient_cases.find_by_id(params[:patient_case_id])
  end
end
