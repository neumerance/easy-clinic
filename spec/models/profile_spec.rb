require 'rails_helper'

describe Profile do
  it { is_expected.to validate_content_type_of(:photo).allowing('image/png', 'image/jpg', 'image/jpeg') }
  it { is_expected.to validate_size_of(:photo).less_than(3.megabytes) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:address) }
  it { is_expected.to validate_presence_of(:age) }
  it { is_expected.to validate_presence_of(:gender) }
  it { is_expected.to belong_to(:user) }
end
