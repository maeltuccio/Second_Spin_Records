class DiscsController < ApplicationController

  def index
    @discs = Disc.all
  end

  def show
    @disc = Disc.find(params[:id])
  end

  def create
    @disc = Disc.new(disc_params)
    if @disc.save
      redirect_to @disc
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
  end

  def new
    @disc = Disc.new
  end

  private

  def disc_params
    params.require(:disc).permit(:title, :artist, :genre, :suggested_price, :label, :release_date, :cat_number)
  end
end
