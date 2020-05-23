FactoryBot.define do
  factory :conversation do
    association :user
    is_read { false }
    content { FFaker::Lorem.paragraph }

    trait :with_attachments do
      after :create do |object|
        create(:file_upload, attachment_for: object)
      end
    end
  end
end
