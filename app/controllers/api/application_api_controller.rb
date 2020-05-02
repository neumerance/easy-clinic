class Api::ApplicationApiController < ActionController::Base
  before_action :check_auth

  private

  def check_auth
    return if user_signed_in?
    render json: { errors: ['Forbidden access'] }, status: :forbidden
  end
end
