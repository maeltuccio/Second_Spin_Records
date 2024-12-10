class DiscsController < ApplicationController

  def index
    @discs = Disc.all
  end

  def show
    @disc = Disc.find(params[:id])
  end

  def create
  end

  def update
  end

  def new
  end
end
