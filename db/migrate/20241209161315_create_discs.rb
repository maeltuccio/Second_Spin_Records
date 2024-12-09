class CreateDiscs < ActiveRecord::Migration[7.1]
  def change
    create_table :discs do |t|
      t.string :title
      t.string :artist
      t.string :genre
      t.float :suggested_price
      t.string :label
      t.date :release_date
      t.string :cat_number

      t.timestamps
    end
  end
end
