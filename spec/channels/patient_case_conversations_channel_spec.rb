require 'rails_helper'

describe PatientCaseConversationsChannel, type: :channel do
  let(:current_user) { create(:doctor, :with_patient_cases) }
  let(:patient_case) { current_user.patient_cases.first }

  before do
    stub_connection current_user: current_user
  end

  it "subscribes to a stream when patient_case_id is provided" do
    subscribe(patient_case_id: patient_case.id)
    expect(subscription).to be_confirmed
    expect(subscription).to have_stream_from("#{described_class::STREAM_AFFIX}_#{patient_case.id}")
  end
end
