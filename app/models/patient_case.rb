class PatientCase < ApplicationRecord
  STATUSES = [:open, :taken, :resolved].freeze

  enum status: STATUSES

  belongs_to :doctor, optional: true
  belongs_to :patient
  has_many :conversations, as: :message_for
  has_many :file_uploads, through: :conversations

  validates :title, :description, presence: true
  validates :status, inclusion: { in: STATUSES.map(&:to_s)  }

  before_validation ->() { self.case_id = Time.now.to_i }

  scope :open, ->() { where(status: :open) }
  scope :taken, ->() { where(status: :taken) }
  scope :resolved, ->() { where(status: :resolved) }

  before_create ->() {
    self.status = :taken if self.doctor
  }
end
