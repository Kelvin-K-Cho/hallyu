class CreateBands < ActiveRecord::Migration[5.1]
  def change
    create_table :bands do |t|
      t.string :band_name, null: false
      t.string :image_url, null: false

      t.timestamps
    end
    add_index :bands, :band_name
  end
end
