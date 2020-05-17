class CreateFileUploads < ActiveRecord::Migration[6.0]
  def change
    create_table :file_uploads do |t|
      t.string :attachment_for_type
      t.integer :attachment_for_id
      t.timestamps
    end
  end
end
