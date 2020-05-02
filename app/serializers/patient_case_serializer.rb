class PatientCaseSerializer
  include FastJsonapi::ObjectSerializer

  attributes :case_id, :title

  belongs_to :patient, lazy_load_data: true,
              if: Proc.new { |record, params| params && params[:current_user].doctor? }
  belongs_to :doctor, lazy_load_data: true,
              if: Proc.new { |record, params| params && params[:current_user].patient? }
end
