class ChatroomsController < ApplicationController
  def chat_with_owner
    #Récupérer ou créer la chatroom avec le user du disc (owner)
    @chatroom = Chatroom.find_or_create_by_users(User.find(params[:id]), current_user)
    redirect_to chatroom_path(@chatroom)
    #redirige vers la show de la chatroom
  end
  def show
    @chatroom = Chatroom.find(params[:id])
    @messages = @chatroom.messages.order(created_at: :asc)
  end

  def index
    @chatrooms = Chatroom.where("user1_id = ? OR user2_id = ?", current_user.id, current_user.id)
  end
end
