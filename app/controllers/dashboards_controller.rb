class DashboardsController < ApplicationController
  def index
    @user = current_user
    @recommendations = current_user.wishlists.map(&:disc)
  end
end
