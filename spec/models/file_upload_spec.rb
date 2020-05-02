require 'rails_helper'

describe FileUpload do
  it { is_expected.to belong_to(:attachment) }
  it { is_expected.to validate_content_type_of(:file).allowing(described_class::ALLOWED_MIME_TYPES) }
  it { is_expected.to validate_size_of(:file).less_than(120.megabytes) }
end
