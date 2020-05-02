class ProfileSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :overview, :age, :gender, :occupation, :address

  attribute :photo do |object|
    ActiveStorage::Current.host = 'http://lvh.me'
    object.photo.variant(combine_options: { gravity: 'Center', crop: '150x230+0+0' }).processed.service_url
  end
end
