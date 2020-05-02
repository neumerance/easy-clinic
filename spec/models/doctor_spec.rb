require 'rails_helper'

describe Doctor do
  it { is_expected.to have_many(:patient_cases) }
  it { is_expected.to have_many(:patients) }
  it { is_expected.to have_one(:profile) }
end
