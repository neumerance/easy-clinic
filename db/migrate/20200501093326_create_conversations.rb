class CreateConversations < ActiveRecord::Migration[6.0]
  def change
    create_table  :conversations do |t|
      t.string    :message_for_type, index: true
      t.integer    :message_for_id, index: true
      t.text      :content
      t.timestamps
    end
  end
end
