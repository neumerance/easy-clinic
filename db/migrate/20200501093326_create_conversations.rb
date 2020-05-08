class CreateConversations < ActiveRecord::Migration[6.0]
  def change
    create_table  :conversations do |t|
      t.string    :message_type, index: true
      t.integer    :message_id, index: true
      t.text      :content
      t.timestamps
    end
  end
end
