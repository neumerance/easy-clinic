class Conversation < ApplicationRecord
  belongs_to  :user
  has_one     :profile, through: :user
  belongs_to  :message_for, polymorphic: true
  has_many    :file_uploads, as: :attachment_for
end
