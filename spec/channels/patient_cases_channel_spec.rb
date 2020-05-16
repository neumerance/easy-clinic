require 'rails_helper'

describe PatientCasesChannel, type: :channel do
  let(:current_user) { create(:doctor, :with_patient_cases) }

  before do
    stub_connection current_user: current_user
  end

  it "subscribes to a stream" do
    subscribe
    expect(subscription).to be_confirmed
    expect(subscription).to have_stream_from("patient_cases_#{current_user.id}")
  end
end
