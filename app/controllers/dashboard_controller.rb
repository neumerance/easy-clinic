class DashboardController < ApplicationController
  def index
    @patient_cases = PatientCaseSerializer.new(user_role.patient_cases)
  end
end
