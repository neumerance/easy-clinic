class PatientSerializer
  include FastJsonapi::ObjectSerializer

  attribute :profile do |object|
    ProfileSerializer.new(object.profile).serializable_hash.dig(:data, :attributes)
  end
end
