class Conversation < ApplicationRecord
  enum status: [:sent, :read]

  belongs_to  :user
  has_one     :profile, through: :user
  belongs_to  :message_for, polymorphic: true
  has_many    :file_uploads, as: :attachment_for

  default_scope ->() { order('created_at DESC') }
end
