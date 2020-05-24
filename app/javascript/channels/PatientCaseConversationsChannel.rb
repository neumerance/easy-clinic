class PatientCasesConversationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "patient_cases_conversations_#{params[:patient_case_id]}"
  end

  def self.broadcast_resource(serialized_resources, patient_case_id)
    ActionCable.server.broadcast(
      "patient_cases_conversations_#{patient_case_id}",
      serialized_resources
    )
  end
end
