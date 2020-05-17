class ConversationSerializer
  include FastJsonapi::ObjectSerializer

  attributes :content, :user_id
  attribute  :user_profile, &:profile

  attribute :attachments, if: Proc.new { |record, params|
    params && params[:include_assoc]
  } do |object|
    FileUploadSerializer.new(object.file_uploads).serializable_hash.dig(:data)
  end
end
