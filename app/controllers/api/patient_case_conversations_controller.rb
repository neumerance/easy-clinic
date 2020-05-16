class Api::PatientCaseConversationsController < ApplicationController
  before_action :get_patient_case
  before_action :get_conversations, only: :index
  
  def index
    render json: serialized_resources
  end

  private

  def get_conversations
    @conversations = @patient_case.conversations.page(params[:page] || 1)
  end

  def get_patient_case
    @patient_case = user_role.patient_cases.find_by_id(params[:patient_case_id])
  end

  def serialized_resources
    ConversationSerializer.new(@conversations, {
      params: {
        include_assoc: true
      }
    })
  end
end
