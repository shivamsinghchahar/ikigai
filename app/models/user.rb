class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  enum role: {
    regular_user: 0,
    administrator: 1
  }

  has_secure_password

  before_save :downcase_email

  validates :email, presence: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX },
            uniqueness: { case_sensitive: false }
  validates :first_name, presence: true, length: { maximum: 50 }
  validates :last_name, presence: true, length: { maximum: 50 }
  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true
  validates :role, inclusion: roles.keys

  # Returns the hash digest of the given string
  def self.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ?
    BCrypt::Engine::MIN_COST : BCrypt::Engine.cost

    BCrypt::Password.create(string, cost: cost)
  end

  private
    def downcase_email
      self.email = email.downcase
    end
end
