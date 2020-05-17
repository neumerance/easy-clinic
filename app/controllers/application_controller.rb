class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :user_role

  private

  def user_role
    return nil unless current_user
    current_user.doctor? ?
    current_user.doctor :
    current_user.patient
  end
end
