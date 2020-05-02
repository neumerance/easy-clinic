class PatientSerializer
  include FastJsonapi::ObjectSerializer

  has_one :profile, lazy_load_data: true
end
