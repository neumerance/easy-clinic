class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :set_active_storage_host
  before_action :user_role

  private

  def user_role
    return nil unless current_user
    current_user.doctor? ?
    current_user.doctor :
    current_user.patient
  end

  def render_json
    render json: serialized_resource
  end

  def render_collection
    render json: serialized_resources.merge(meta: {
      pagination: {
        current_page: @resources.current_page,
        next_page: @resources.next_page,
        prev_page: @resources.prev_page,
        pages: @resources.total_pages
      }
    })
  end

  def set_active_storage_host
    ActiveStorage::Current.host = request.base_url
  end
end

