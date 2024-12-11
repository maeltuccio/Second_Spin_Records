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

  def destroy
    @wishlist = current_user.wishlists.find(params[:id])

    if @wishlist.destroy
      redirect_to wishlists_path, notice: 'Le disque a été retiré de votre wishlist.'
    else
      redirect_to wishlists_path, alert: 'Une erreur est survenue lors de la suppression.'
    end
  end

  def index
    @user = current_user
    @wishlists = @user.wishlists
  end
end
