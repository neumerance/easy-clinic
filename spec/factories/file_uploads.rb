FactoryBot.define do
  factory :file_upload do
    file { Rack::Test::UploadedFile.new('spec/fixtures/images/400x600.jpg', 'image/png') }
  end
end