require 'rails_helper'

describe PatientCase do
  # it { is_expected.to belong_to(:doctor) }
  it { is_expected.to belong_to(:patient) }
  it { is_expected.to have_many(:conversations) }
  it { is_expected.to have_many(:file_uploads) }
  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to define_enum_for(:status).with(described_class::STATUSES.map(&:to_s)) }
end