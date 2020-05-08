class PatientCase < ApplicationRecord
  STATUSES = [:open, :taken, :resolved].freeze

  enum status: STATUSES

  belongs_to :doctor, optional: true
  belongs_to :patient
  has_many :conversations, as: :message
  has_many :file_uploads, through: :conversations

  validates :title, presence: true
  validates :status, inclusion: { in: STATUSES.map(&:to_s)  }

  before_validation ->() { self.case_id = Time.now.to_i }

  scope :open, ->() { where(status: :open) }
  scope :taken, ->() { where(status: :taken) }
  scope :resolved, ->() { where(status: :resolved) }
end
