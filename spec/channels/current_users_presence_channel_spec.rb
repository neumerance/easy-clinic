require 'rails_helper'

describe CurrentUsersPresenceChannel, type: :channel do
  let(:current_user) { create(:doctor, :with_patient_cases) }

  before do
    stub_connection current_user: current_user
    subscribe
  end

  it 'subscribes to a stream' do
    expect(subscription).to be_confirmed
  end

  it 'unsubscribes to a stream' do
    subscription.unsubscribe_from_channel
    expect(current_user.online).not_to be_truthy
  end

  it 'updates appearance' do
    subscription.appear(false)
    expect(current_user.online).to be_falsey
  end
end
