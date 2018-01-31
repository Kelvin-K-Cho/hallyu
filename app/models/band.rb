# == Schema Information
#
# Table name: bands
#
#  id         :integer          not null, primary key
#  band_name  :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Band < ApplicationRecord
  validates :band_name, :image_url, presence: true

  has_many :albums,
    primary_key: :id,
    foreign_key: :band_id,
    class_name: :Album
end
