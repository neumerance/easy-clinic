
class FileUploadSerializer
  ActiveStorage::Current.host = 'http://lvh.me'
  include FastJsonapi::ObjectSerializer

  attribute :file do |object|
    if object.file.image?
      object.file.variant(
        combine_options: { gravity: 'Center', crop: '150x230+0+0', quality: 75 }
      ).processed.service_url
    else
      object.file.service_url
    end
  end
end
