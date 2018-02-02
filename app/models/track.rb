# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  lyrics     :string
#  ord        :integer          not null
#  image_url  :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :ord, :image_url, :album_id, presence: true

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album

  has_many :tags,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track

  has_many :stations,
    through: :tags,
    source: :station

end
