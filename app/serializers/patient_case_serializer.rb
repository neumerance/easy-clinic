class PatientCaseSerializer
  include FastJsonapi::ObjectSerializer

  attributes :case_id, :title, :description, :status, :created_at

  attribute  :updated_at

  attribute :patient, if: Proc.new { |record, params|
    params && params[:current_user].doctor? && params[:include_assoc]
  } do |object|
    DoctorSerializer.new(object.patient).serializable_hash.dig(:data, :attributes)
  end

  attribute :doctor, if: Proc.new { |record, params|
    params && params[:current_user].patient? && params[:include_assoc]
  } do |object|
    DoctorSerializer.new(object.doctor).serializable_hash.dig(:data, :attributes)
  end
end
