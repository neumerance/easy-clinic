FactoryBot.define do
  factory :patient_case do
    transient do
      conversation_count { 1 }
    end
    association :doctor
    association :patient
    title { FFaker::Lorem.sentence }
    description { FFaker::Lorem.paragraph }
    status { 'taken' }

    trait :with_conversation do
      after :create do |object, evaluator|
        create_list(
          :conversation, evaluator.conversation_count,
          message_for: object,
          user: object.patient,
          user: object.patient.user
        )
      end
    end
  end
end
