class Admin < ApplicationRecord
  ROLE = 2.freeze
  default_scope ->() { where(role: ROLE) }
  before_validation ->() { self.role = 3 }
end
