class CommentsController < ApplicationController
  before_action :set_disc  # Trouver le disque avant chaque action

  def create
    @comment = @disc.comments.new(comment_params)
    @comment.user = current_user  # Associe l'utilisateur connecté au commentaire

    if @comment.save
      # Utilisation de Turbo Streams pour ajouter le commentaire et réinitialiser le formulaire
      render turbo_stream: turbo_stream.append("comments_list", partial: "comments/comment", locals: { comment: @comment })
    else
      render json: { error: @comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_disc
    @disc = Disc.find(params[:disc_id])  # Trouver le disque par ID
  end

  def comment_params
    params.require(:comment).permit(:rating, :content)  # Autoriser les paramètres
  end
end
