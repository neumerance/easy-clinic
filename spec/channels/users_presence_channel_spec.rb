require 'rails_helper'

describe UsersPresenceChannel, type: :channel do
  let(:user) { create(:user) }

  it "subscribes to a stream" do
    subscribe(user_id: user.id)
    expect(subscription).to be_confirmed
    expect(subscription).to have_stream_from("#{described_class::STREAM_AFFIX}_#{user.id}")
  end

  it 'broadcast users presence' do
    expect { described_class.broadcast_resource(true, user.id) }.to have_broadcasted_to(
      "#{described_class::STREAM_AFFIX}_#{user.id}"
    )
  end
end
