class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :lyrics
      t.integer :ord, null: false
      t.string :image_url, null: false
      t.integer :album_id, null: false

      t.timestamps
    end
    add_index :tracks, :album_id
  end
end
