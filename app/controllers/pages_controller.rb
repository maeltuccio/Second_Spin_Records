class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    @discs = Disc.all
  end
end
