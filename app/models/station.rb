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

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :stations,
    primary_key: :id,
    foreign_key: :station_id,
    class_name: :Station
end
