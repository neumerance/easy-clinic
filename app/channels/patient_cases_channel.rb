class PatientCasesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "patient_cases_#{current_user.id}"
  end

  def self.broadcast_resource(resource, user_ids)
    user_ids.each do |user_id|
      ActionCable.server.broadcast(
        "patient_cases_#{user_id}",
        resource
      )
    end
  end
end
