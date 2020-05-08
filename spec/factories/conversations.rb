FactoryBot.define do
  factory :conversation do
    content { FFaker::Lorem.paragraph }

    trait :with_attachments do
      after :create do |object|
        create(:file_upload, attachment: object)
      end
    end
  end
end
