require 'rails_helper'

describe Conversation do
  it { is_expected.to belong_to(:message) }
  it { is_expected.to have_many(:file_uploads) }
  it { is_expected.to belong_to(:user) }
  it { is_expected.to have_one(:profile) }
end