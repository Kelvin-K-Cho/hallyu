# == Schema Information
#
# Table name: stations
#
#  id           :integer          not null, primary key
#  station_name :string           not null
#  description  :text
#  image_url    :string           not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Station < ApplicationRecord
  validates :station_name, :image_url, presence: true

  has_attached_file :image, default_url: "default_station.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :tags,
    primary_key: :id,
    foreign_key: :station_id,
    class_name: :Tag

  has_many :tracks,
    through: :tags,
    source: :track

end
