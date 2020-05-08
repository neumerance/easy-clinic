FactoryBot.define do
  factory :patient_case do
    association :doctor
    association :patient
    title { FFaker::Lorem.sentence }

    trait :with_conversation do
      after :create do |object|
        create(:conversation, message: object)
      end
    end
  end
end
