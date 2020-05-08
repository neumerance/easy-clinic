class ConversationSerializer
  include FastJsonapi::ObjectSerializer

  attributes :content

  attribute :attachments, if: Proc.new { |record, params|
    params && params[:include_assoc]
  } do |object|
    FileUploadSerializer.new(record.file_uploads).serializable_hash.dig(:data, :attributes)
  end
end
