class Conversation < ApplicationRecord
  paginates_per 15
  belongs_to :message, polymorphic: true
  has_many :file_uploads, as: :attachment
end
