require 'rails_helper'

describe Api::ApplicationApiController do
  controller do
    def index; end
  end

  it 'respond forbidden' do
    get :index
    expect(response).to have_http_status(:forbidden)
  end
end