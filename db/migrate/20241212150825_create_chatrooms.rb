class CreateChatrooms < ActiveRecord::Migration[7.1]
  def change
    create_table :chatrooms do |t|
      t.references :user1, null: false, foreign_key: {to_table: "users"}
      t.references :user2, null: false, foreign_key: {to_table: "users"}

      t.timestamps
    end
  end
end
