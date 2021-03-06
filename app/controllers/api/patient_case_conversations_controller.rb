class Api::PatientCaseConversationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :get_patient_case
  before_action :get_conversations
  after_action  :broadcast_conversation, on: :create

  def index
    render_collection
  end

  def create
    @resource = @patient_case.conversations.create(allowed_params)
    attach_file_uploads
    render_json
  end

  private

  def get_conversations
    @resources = @patient_case.conversations.page(params[:page] || 1).per(15)
  end

  def get_patient_case
    @patient_case = user_role.patient_cases.includes(:patient, :doctor).find_by_id(params[:patient_case_id])
  end

  def allowed_params
    params[:conversation][:user_id] = current_user.id
    params.require(:conversation).permit(:content, :file_uploads, :user_id)
  end

  def attach_file_uploads
    uploads = params.dig(:conversation, :file_uploads) || []
    uploads.each do |file|
      FileUpload.create!(attachment_for: @resource, file: file)
    end
  end

  def broadcast_conversation
    PatientCaseConversationsChannel.broadcast_resource(
      serialized_resource,
      @patient_case.id
    )
  end

  def serialized_resources
    serialize(@resources)
  end

  def serialized_resource
    serialize(@resource)
  end

  def serialize(resources)
    ConversationSerializer.new(resources, {
      params: {
        include_assoc: true
      }
    }).serializable_hash
  end
end
