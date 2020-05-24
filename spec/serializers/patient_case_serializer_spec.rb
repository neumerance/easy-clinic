require 'rails_helper'

describe PatientCaseSerializer do
  let(:include_assoc) { false }
  let(:patient_case) { create(:patient_case) }

  let(:expectation) do
    {
      updated_at: patient_case.updated_at,
      case_id: patient_case.case_id,
      title: patient_case.title,
      description: patient_case.description,
      status: patient_case.status,
      created_at: patient_case.created_at
    }
  end

  subject do
    described_class.new(
      patient_case, params: {
        current_user: patient_case.doctor,
        include_assoc: include_assoc
      }
    ).serializable_hash[:data][:attributes]
  end

  it { is_expected.to eq  expectation }
end
