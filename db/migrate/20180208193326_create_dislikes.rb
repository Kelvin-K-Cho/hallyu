class CreateDislikes < ActiveRecord::Migration[5.1]
  def change
    create_table :dislikes do |t|
      t.integer :station_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
  end
end
