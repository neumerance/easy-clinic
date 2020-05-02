class CreatePatientCases < ActiveRecord::Migration[6.0]
  def change
    create_table :patient_cases do |t|
      t.string     :title
      t.string     :case_id
      t.references :doctor, index: true
      t.references :patient, index: true
      t.timestamps
    end
  end
end
