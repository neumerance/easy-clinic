class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  enum role: [:patient, :doctor, :admin]

  belongs_to :doctor, foreign_key: 'id', optional: true
  belongs_to :patient, foreign_key: 'id', optional: true
end
