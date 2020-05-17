class AddUserInConversation < ActiveRecord::Migration[6.0]
  def change
    add_reference :conversations, :user, index: true
    add_column :conversations, :is_read, :boolean, default: false
  end
end
