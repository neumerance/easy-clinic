class PatientCase < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient
  has_many :conversations, as: :message
  has_many :file_uploads, through: :conversations

  validates :title, presence: true

  before_validation ->() { self.case_id = Time.now.to_i }
end
