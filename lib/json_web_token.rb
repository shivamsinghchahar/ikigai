class JsonWebToken
  SECRET_KEY = ENV["JWT_SECRET_KEY"] || Rails.application.secrets.secret_key_base

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def self.verify(token)
    body = JWT.decode(token, SECRET_KEY).first
    HashWithIndifferentAccess.new body
  rescue JWT::VerificationError, JWT::DecodeError
    nil
  end
end
