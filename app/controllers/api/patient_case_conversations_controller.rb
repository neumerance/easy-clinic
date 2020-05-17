class Api::PatientCaseConversationsController < ApplicationController
  before_action :get_patient_case
  before_action :get_conversations
  after_action  :broadcast_conversation, on: :create
  
  def index
    render json: serialized_resources
  end

  def create
    @conversations = @patient_case.conversations.create(allowed_params)
    attach_file_uploads
    render json: serialized_resources
  end

  private

  def get_conversations
    @conversations = @patient_case.conversations.page(params[:page] || 1)
  end

  def get_patient_case
    @patient_case = user_role.patient_cases.includes(
      conversations: [{user: :profile}, :file_uploads]
    ).find_by_id(params[:patient_case_id])
  end

  def serialized_resources
    ConversationSerializer.new(@conversations, {
      params: {
        include_assoc: true
      }
    })
  end

  def allowed_params
    params[:conversation][:user_id] = current_user.id
    params.require(:conversation).permit(:content, :file_uploads, :user_id)
  end

  def attach_file_uploads
    params[:conversation][:file_uploads].each do |file|
      FileUpload.create!(attachment_for: @conversations, file: file)
    end
  end

  def broadcast_conversation
    ActionCable.server.broadcast(
      "#{PatientCaseConversationsChannel::STREAM_AFFIX}_#{@patient_case.id}",
      @conversations 
    )
  end
end
