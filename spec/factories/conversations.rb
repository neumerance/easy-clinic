FactoryBot.define do
  factory :conversation do
    association :user
    content { FFaker::Lorem.paragraph }

    trait :with_attachments do
      after :create do |object|
        create(:file_upload, attachment_for: object)
      end
    end
  end
end
