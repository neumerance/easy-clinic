class AddUserInConversation < ActiveRecord::Migration[6.0]
  def change
    add_reference :conversations, :user, index: true
    add_column :conversations, :status, :integer, default: 0
  end
end
