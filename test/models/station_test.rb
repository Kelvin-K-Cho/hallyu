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

require 'test_helper'

class StationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
