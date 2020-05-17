class PatientCaseConversationsChannel < ApplicationCable::Channel
  STREAM_AFFIX = 'patient_case_conversations'.freeze

  def subscribed
    reject unless patient_case

    stream_from "#{STREAM_AFFIX}_#{@patient_case.id}" if @patient_case
  end

  private

  def patient_case
    @patient_case = current_user.patient_cases.find_by_id(params[:patient_case_id])
  end
end
