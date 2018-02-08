# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  lyrics     :string
#  ord        :integer          not null
#  image_url  :string           not null
#  song_url   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :ord, :image_url, :song_url, presence: true

  # belongs_to :album,
  #   primary_key: :id,
  #   foreign_key: :album_id,
  #   class_name: :Album

  has_many :dislikes,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Dislike,
    dependent: :destroy

  has_many :likes,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Like,
    dependent: :destroy

  has_many :station_dislikes,
    through: :dislikes,
    source: :station,
    dependent: :destroy

  has_many :station_likes,
    through: :likes,
    source: :station,
    dependent: :destroy

end
