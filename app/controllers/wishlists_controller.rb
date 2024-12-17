class WishlistsController < ApplicationController
  before_action :authenticate_user!

  def create
    @disc = Disc.find(params[:disc_id])
    @wishlist = Wishlist.new(user: current_user, disc: @disc)

    if @wishlist.save
      respond_to do |format|
        format.html { redirect_to @disc, notice: 'Le disque a été ajouté à votre wishlist.' }
        format.turbo_stream { render turbo_stream: turbo_stream.replace("wishlist-btn", partial: "wishlists/add_btn", locals: { disc: @disc, user: current_user }) }
      end
      # redirect_to @disc, notice: 'Le disque a été ajouté à votre wishlist.'
    else
      redirect_to @disc, alert: 'An error occured while adding the disc to your wishlist.'
    end
  end

  def destroy
    @wishlist = current_user.wishlists.find(params[:id])
    @disc = @wishlist.disc
    if @wishlist.destroy
      respond_to do |format|
        format.html { redirect_to @disc, notice: 'The Record was removed from your wishlist' }
        format.turbo_stream { render turbo_stream: turbo_stream.replace("wishlist-btn", partial: "wishlists/add_btn", locals: { disc: @disc, user: current_user }) }
      end
    else
      redirect_to wishlists_path, alert: 'An error occured while removing the disc from your wishlist.'
    end
  end

  def index
    @user = current_user
    @wishlists = @user.wishlists
  end
end
