class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :station_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
  end
end
