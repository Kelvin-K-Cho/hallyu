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

require 'test_helper'

class DislikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end