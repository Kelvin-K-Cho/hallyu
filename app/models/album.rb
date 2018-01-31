# == Schema Information
#
# Table name: albums
#
#  id           :integer          not null, primary key
#  album_name   :string           not null
#  release_year :integer          not null
#  image_url    :string           not null
#  band_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Album < ApplicationRecord
  validates :album_name, :release_year, :image_url, :band_id, presence: true

  belongs_to :band,
    primary_key: :id,
    foreign_key: :band_id,
    class_name: :Band

  has_many :albums,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album

end
