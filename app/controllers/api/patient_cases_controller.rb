class Api::PatientCasesController < ApplicationController
  before_action :get_patient_case, only: [:update, :edit]
  before_action :get_patient_cases, only: :index

  def index
    render_collection
  end

  def show
    @resource = PatientCase.includes(
      :doctor, :patient,
      conversations: :file_uploads
    ).find_by_id(params[:id])
    render_json
  end

  # As doctor  - pass patient_id
  # only doctors can update case
  # they update case to refer patient to another doctor
  # or assign the case to itself
  def update
    render_json
  end

  # As patient - pass or blank doctor_id
  # As doctor  - pass patient_id
  def create
    @resource = user_role.patient_cases.create!(patient_case_params)
    render_json
  end

  private

  def serialized_resources
    serialize(@resources)
  end

  def serialized_resource
    serialize(@resource)
  end

  def serialize(resources)
    PatientCaseSerializer.new(
      resources, {
        params: {
          current_user: current_user,
          include_assoc: %w(show create update).include?(params[:action])
        }
      }
    ).serializable_hash
  end

  def get_patient_cases
    @resources = if params[:status] == 'taken'
                    user_role.patient_cases.taken.page(params[:page]).per(params[:per])
                  elsif params[:status] == 'resolved'
                    user_role.patient_cases.resolved.page(params[:page]).per(params[:per])
                  else
                    PatientCase.open.page(params[:page]).per(params[:per])
                  end
  end

  def get_patient_case
    @resource = user_role.patient_cases.find(params[:id])
  end

  def patient_case_params
    params.require(:patient_case).permit!
  end
end
