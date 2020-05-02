require 'rails_helper'

describe PatientCaseSerializer do
  let(:patient_case) { create(:patient_case) }

  let(:expectation) do
    {
      case_id: patient_case.case_id,
      title: patient_case.title
    }
  end

  subject do
    described_class.new(
      patient_case, params: {
        current_user: patient_case.doctor
      }
    ).serializable_hash[:data][:attributes]
  end

  it { is_expected.to eq  expectation }
end
