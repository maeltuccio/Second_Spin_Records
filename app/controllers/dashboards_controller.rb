class DashboardsController < ApplicationController
  def index
    @user = current_user
    @recommendations = current_user.wishlists.map(&:disc)
    @disc_reco = Disc.find(@recommendations.sample.id)
    @disc = Disc.where(genre: @disc_reco.genre)
    @discs = @disc.where.not(id: @disc_reco.id) if @disc.count > 1

  end
end
