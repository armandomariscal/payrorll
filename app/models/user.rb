class User < ApplicationRecord
  devise :database_authenticatable,
         :jwt_authenticatable,
         :validatable,
         jwt_revocation_strategy: Devise::JWT::RevocationStrategies::Null
end
