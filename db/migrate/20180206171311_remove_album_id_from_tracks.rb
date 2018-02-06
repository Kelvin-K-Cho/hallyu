class RemoveAlbumIdFromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :album_id, :integer
  end
end
