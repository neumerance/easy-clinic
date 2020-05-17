class PatientCaseSerializer
  include FastJsonapi::ObjectSerializer

  attributes :case_id, :title, :description, :status, :created_at

  attribute :patient, if: Proc.new { |record, params|
    params && params[:current_user].doctor? && params[:include_assoc]
  } do |object|
    DoctorSerializer.new(object.patient).serializable_hash.dig(:data, :attributes)
  end

  attribute :doctor, if: Proc.new { |record, params|
    params && params[:current_user].patient? && params[:include_assoc]
  } do |object|
    DoctorSerializer.new(object.doctor).serializable_hash.dig(:data, :attributes)
  end

  attribute :conversations, if: Proc.new { |record, params|
    params && params[:include_assoc]
  } do |object|
    ConversationSerializer.new(
      object.conversations,
      {
        params: {
          include_assoc: true
        }
      }
    ).serializable_hash.dig(:data)
  end

  attribute :attachments, if: Proc.new { |record, params|
    params && params[:include_assoc]
  } do |object|
    FileUploadSerializer.new(object.file_uploads).serializable_hash.dig(:data)
  end
end
