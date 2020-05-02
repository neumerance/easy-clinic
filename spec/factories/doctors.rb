FactoryBot.define do
  factory :doctor do
    association :profile
    email { FFaker::Internet.email }
    password { 'ABC12abc' }
    password_confirmation { 'ABC12abc' }
    role { 1 }
  end
end
