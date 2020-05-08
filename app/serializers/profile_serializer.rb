class ProfileSerializer
  ActiveStorage::Current.host = 'http://lvh.me'
  include FastJsonapi::ObjectSerializer
  attributes :name, :overview, :age, :gender, :occupation, :address

  attribute :photo do |object|
    object.photo.variant(combine_options: { gravity: 'Center', crop: '150x230+0+0', quality: 75 }).processed.service_url
  end
end
