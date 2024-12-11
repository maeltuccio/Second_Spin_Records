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

  def index
    @user = current_user
    @collections = @user.collection
  end
end
