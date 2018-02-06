class AddAttachmentImageToStations < ActiveRecord::Migration[5.1]
  def self.up
    change_table :stations do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :stations, :image
  end
end
