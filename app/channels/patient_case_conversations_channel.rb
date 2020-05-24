class PatientCaseConversationsChannel < ApplicationCable::Channel
  STREAM_AFFIX = 'patient_cases_conversations'.freeze

  def subscribed
    stream_from "#{STREAM_AFFIX}_#{params[:patient_case_id]}"
  end

  def self.broadcast_resource(serialized_resources, patient_case_id)
    ActionCable.server.broadcast(
      "#{STREAM_AFFIX}_#{patient_case_id}",
      serialized_resources
    )
  end
end
