class AddStatusToPatientCases < ActiveRecord::Migration[6.0]
  def change
    add_column :patient_cases, :status, :integer, default: 0
  end
end
