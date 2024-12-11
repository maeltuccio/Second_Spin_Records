class WishlistsController < ApplicationController
  before_action :authenticate_user!

  def create
    @disc = Disc.find(params[:disc_id])
    @wishlist = Wishlist.new(user: current_user, disc: @disc)

    if @wishlist.save
      redirect_to wishlists_path, notice: 'Le disque a été ajouté à votre wishlist.'
    else
      redirect_to @disc, alert: 'Une erreur est survenue lors de l\'ajout à votre wishlist.'
    end
  end

  def index
    @user = current_user
    @wishlists = @user.wishlists
  end
end
