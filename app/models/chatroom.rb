class Chatroom < ApplicationRecord
  has_many :messages, dependent: :destroy
  belongs_to :user1, class_name: "User"
  belongs_to :user2, class_name: "User"

  def self.find_or_create_by_users(user1, user2)
    chatroom = Chatroom.where(user1: user1, user2: user2).or(Chatroom.where(user1: user2, user2: user1)).first
    unless chatroom
      chatroom = Chatroom.create(user1: user1, user2: user2)
    end
    chatroom
  end
end
