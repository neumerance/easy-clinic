require "rails_helper"

describe ApplicationCable::Connection, type: :channel do
  let(:current_user) { create(:doctor) }

  it "successfully connects" do
    cookies.signed[:user_id] = current_user.id
    connect '/cable'
    expect(connection.current_user).to eq current_user
  end

  it "rejects connection" do
    expect { connect "/cable" }.to have_rejected_connection
  end
end
