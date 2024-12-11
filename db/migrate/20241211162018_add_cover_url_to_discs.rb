class AddCoverUrlToDiscs < ActiveRecord::Migration[7.1]
  def change
    add_column :discs, :cover_url, :string
  end
end
