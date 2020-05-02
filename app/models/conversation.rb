class Conversation < ApplicationRecord
  belongs_to :message, polymorphic: true
  has_many :file_uploads, as: :attachment
end
