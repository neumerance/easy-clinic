FactoryBot.define do
  factory :patient_case do
    association :doctor
    association :patient
    title { FFaker::Lorem.sentence }
  end
end
