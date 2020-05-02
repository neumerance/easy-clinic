FactoryBot.define do
  factory :profile do
    association :user
    name { FFaker::Name.name }
    overview { FFaker::Lorem.paragraph }
    age { 35 }
    gender { :male }
    address { FFaker::AddressFI.full_address }
    occupation { FFaker::Job.title }
    photo { Rack::Test::UploadedFile.new('spec/fixtures/images/400x600.jpg', 'image/png') }
  end
end
