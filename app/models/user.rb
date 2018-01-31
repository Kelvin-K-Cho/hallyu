# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  name            :string
#  gender          :string
#  birth_year      :integer
#  postal_code     :integer
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :stations,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Station

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by_credentials(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64

  end

end
