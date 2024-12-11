class ChangeReleaseDateToStringInDiscs < ActiveRecord::Migration[6.0] # ou [7.0] selon ta version
  def change
    # On change le type de la colonne release_date de date à string
    change_column :discs, :release_date, :string
  end
end
