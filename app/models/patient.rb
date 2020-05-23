class Patient < User
  ROLE = 0.freeze
  default_scope ->() { where(role: ROLE) }

  belongs_to :user, foreign_key: 'id', optional: true
  has_one :profile, foreign_key: :user_id
  has_many :patient_cases
  has_many :doctors, through: :patient_cases

  before_validation ->() { self.role = ROLE }
end
