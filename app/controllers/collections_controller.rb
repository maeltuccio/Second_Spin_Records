class CollectionsController < ApplicationController
  before_action :authenticate_user!

  def create
    @disc = Disc.find(params[:disc_id])
    @collection = Collection.new(user: current_user, disc: @disc)

    if @collection.save
      redirect_to collections_path, notice: 'Le disque a été ajouté à votre collection.'
    else
      redirect_to @disc, alert: 'Une erreur est survenue lors de l\'ajout à votre collection.'
    end
  end

  def destroy
    @collection = current_user.collection.find(params[:id])

    if @collection.destroy
      redirect_to collections_path, notice: 'Le disque a été retiré de votre collection.'
    else
      redirect_to collections_path, alert: 'Une erreur est survenue lors de la suppression.'
    end
  end

  def index
    @user = current_user
    @collections = @user.collection.order(created_at: :desc) # Inverser l'ordre en fonction de la date de création
  end
end
