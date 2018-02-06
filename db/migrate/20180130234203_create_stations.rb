class CreateStations < ActiveRecord::Migration[5.1]
  def change
    create_table :stations do |t|
      t.string :station_name, null: false
      t.text :description
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :stations, :user_id
  end
end
