# == Schema Information
#
# Table name: stations
#
#  id                 :integer          not null, primary key
#  station_name       :string           not null
#  description        :text
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Station < ApplicationRecord
  validates :station_name, presence: true

  has_attached_file :image, default_url: "default_station.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :dislikes,
    primary_key: :id,
    foreign_key: :station_id,
    class_name: :Dislike,
    dependent: :destroy

  has_many :likes,
    primary_key: :id,
    foreign_key: :station_id,
    class_name: :Like,
    dependent: :destroy

  has_many :track_dislikes,
    through: :dislikes,
    source: :track,
    dependent: :destroy

  has_many :track_likes,
    through: :likes,
    source: :track,
    dependent: :destroy

end
