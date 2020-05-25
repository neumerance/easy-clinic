require 'rails_helper'

describe ProfileSerializer do
  let(:profile) { create(:profile) }
  let(:expectation) do
    {
      name: profile.name,
      overview: profile.overview,
      age: profile.age,
      gender: profile.gender,
      occupation: profile.occupation,
      address: profile.address
    }
  end

  subject do
    described_class.new(profile).serializable_hash[:data][:attributes]
  end

  it 'serialize' do
    %w(name overview age gender occupation address online).each do |field|
      expect(subject[field]).to eq expectation[field]
    end
  end
end
