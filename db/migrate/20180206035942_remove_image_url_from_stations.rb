class RemoveImageUrlFromStations < ActiveRecord::Migration[5.1]
  def change
    remove_column :stations, :image_url
  end
end
