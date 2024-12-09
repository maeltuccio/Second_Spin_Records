class CreateTracks < ActiveRecord::Migration[7.1]
  def change
    create_table :tracks do |t|
      t.string :name
      t.float :duration
      t.references :disc, null: false, foreign_key: true

      t.timestamps
    end
  end
end
