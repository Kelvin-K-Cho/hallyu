class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :album_name, null: false
      t.integer :release_year, null: false
      t.string :image_url, null: false
      t.integer :band_id, null: false

      t.timestamps
    end
    add_index :albums, :band_id
  end
end
