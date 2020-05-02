require 'rails_helper'

describe Patient do
  it { is_expected.to have_many(:patient_cases) }
  it { is_expected.to have_many(:doctors) }
  it { is_expected.to have_one(:profile) }
end
