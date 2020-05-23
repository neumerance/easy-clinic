
class FileUploadSerializer
  include FastJsonapi::ObjectSerializer

  attribute :thumbname do |object|
    if object.file.image?
      object.file.variant(resize_to_fill: [150, 150, { gravity: 'Center' }]).processed.service_url
    end
  end

  attribute :file do |object|
    object.file.service_url
  end
end
