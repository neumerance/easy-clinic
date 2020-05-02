class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string      :name, null: false
      t.text        :overview
      t.string      :age, null: false
      t.integer     :gender, null: false
      t.string      :occupation
      t.string      :address
      t.references  :user, index: true
      t.timestamps
    end
  end
end
