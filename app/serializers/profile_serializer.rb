class ProfileSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :overview, :age, :gender, :occupation, :address

  attribute :photo do |object|
    object.photo.variant(resize_to_fill: [150, 230, { gravity: 'Center' }]).processed.service_url
  end
end
