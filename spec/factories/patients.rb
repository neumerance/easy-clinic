FactoryBot.define do
  factory :patient do
    email { FFaker::Internet.email }
    password { 'ABC12abc' }
    password_confirmation { 'ABC12abc' }
    role { 0 }
  end
end
