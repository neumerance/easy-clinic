class Profile < ApplicationRecord
  enum gender: [:male, :female]

  belongs_to :user

  validates :name, :address, :age, :gender, presence: true

  has_one_attached :photo
  validates :photo, attached: true, content_type: ['image/png', 'image/jpg', 'image/jpeg'],
            size: { less_than: 3.megabytes , message: 'is not given between size' }
end
