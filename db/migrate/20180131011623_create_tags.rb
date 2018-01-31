class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.integer :station_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
    add_index :tags, :station_id
    add_index :tags, :track_id
  end
end
