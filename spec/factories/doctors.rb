FactoryBot.define do
  factory :doctor do
    association :profile
    email { FFaker::Internet.email }
    password { 'ABC12abc' }
    password_confirmation { 'ABC12abc' }
    role { 1 }

    trait :with_patient_cases do
      after :create do |doctor|
        create(:patient_case, :with_conversation, doctor: doctor)
      end
    end
  end
end
