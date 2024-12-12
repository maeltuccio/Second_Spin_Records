class DiscsController < ApplicationController

  def index
    @query = params[:query]
    if @query.present?
      @discs = Disc.where('title LIKE ?', "%#{@query}%")
    else
      @discs = Disc.all
    end
  end

  def show
    @disc = Disc.find(params[:id])
    @recommended_discs = Disc.where("genre ILIKE ?", @disc.genre).where.not(id: @disc.id).limit(5)
  end

  def create
    @disc = Disc.new(disc_params)
    if @disc.save
      # Ajouter le disque automatiquement à la collection de l'utilisateur
      @collection = Collection.new(user: current_user, disc: @disc)
      if @collection.save
        redirect_to  collections_path, notice: 'Le disque a été créé et ajouté à votre collection.'
      else
        redirect_to discs_path, alert: 'Le disque a été créé, mais une erreur est survenue lors de l\'ajout à votre collection.'
      end
    else
      render :new, status: :unprocessable_entity
    end
  end


  def update
  end

  def new
    @disc = Disc.new
  end

  def reco
    @disc = Disc.find(params[:id])
    @recommended_discs = Disc.where("genre ILIKE ?", @disc.genre).where.not(id: @disc.id)
  end

  private

  def disc_params
    params.require(:disc).permit(:title, :artist, :genre, :suggested_price, :label, :release_date, :cat_number, :photo)
  end
end
