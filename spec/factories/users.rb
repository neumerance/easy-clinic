# file { Rack::Test::UploadedFile.new('path', 'image/png') }
FactoryBot.define do
  factory :user do
    email { FFaker::Internet.email }
    password { 'ABC12abc' }
    password_confirmation { 'ABC12abc' }
    role { 0 }
  end
end
