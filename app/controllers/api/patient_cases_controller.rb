class Api::PatientCasesController < ApplicationController
  before_action :get_patient_case, only: [:update, :edit]

  def index
    @resources = user_role.patient_cases
    render json: serialized_resources
  end

  def show
    @resources = PatientCase.includes(
      :doctor, :patient,
      conversations: :file_uploads
    ).where('patient_cases.id = ?', params[:id])
    render json: serialized_resources
  end

  # As doctor  - pass patient_id
  # only doctors can update case
  # they update case to refer patient to another doctor
  # or assign the case to itself
  def update
    @resources = [@patient_case]
    render json: serialized_resources
  end

  # As patient - pass or blank doctor_id
  # As doctor  - pass patient_id
  def create
    @patient_case = user_role.patient_cases.create(patient_case_params)
    @resources = [@patient_case]
    render json: serialized_resources
  end

  private

  def serialized_resources
    PatientCaseSerializer.new(
      @resources, {
        params: {
          current_user: current_user,
          include_assoc: params[:action] == 'show'
        }
      }
    ).serializable_hash
  end

  def get_patient_case
    @patient_case = @user.patient_cases.find(params[:id])
  end

  def patient_case_params
    params.require(:patient_case).permit!
  end
end
