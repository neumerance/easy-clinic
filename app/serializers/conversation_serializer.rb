class ConversationSerializer
  include FastJsonapi::ObjectSerializer

  attributes :content, :is_read

  attribute :owner do |record|
    ProfileSerializer.new(record.profile).serializable_hash.dig(:data, :attributes)
  end

  attribute :attachments, if: Proc.new { |record, params|
    params && params[:include_assoc]
  } do |object|
    FileUploadSerializer.new(object.file_uploads).serializable_hash.dig(:data)
  end
end
