class Api::PatientCasesController < Api::ApplicationApiController
  before_action :get_patient_case, only: [:show, :update, :edit]

  def index
    render json: current_user.patient_cases
  end

  def show
    render json: @patient_case
  end

  # As doctor  - pass patient_id
  # only doctors can update case
  # they update case to refer patient to another doctor
  # or assign the case to itself
  def update
    @patient_case.update(patient_case_params)
    render json: @patient_case
  end

  # As patient - pass or blank doctor_id
  # As doctor  - pass patient_id
  def create
    @patient_case = current_user.patient_cases.create(patient_case_params)
    render json: @patient_case
  end

  private

  def get_patient_case
    @patient_case = current_user.patient_cases.find(params[:id])
  end

  def patient_case_params
    params.require(:patient_case).permit!
  end
end
