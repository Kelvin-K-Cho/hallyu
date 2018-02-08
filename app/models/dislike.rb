# == Schema Information
#
# Table name: dislikes
#
#  id         :integer          not null, primary key
#  station_id :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Dislike < ApplicationRecord

  validates :station_id, :track_id, presence: true

  belongs_to :station,
    primary_key: :id,
    foreign_key: :station_id,
    class_name: :Station

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track

end
