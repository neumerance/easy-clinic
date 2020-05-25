class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  enum role: [:patient, :doctor, :admin]

  belongs_to :doctor, foreign_key: 'id', optional: true
  belongs_to :patient, foreign_key: 'id', optional: true
  has_one    :profile, foreign_key: 'user_id'

  def appear_online
    update(online: true)
  end

  def appear_offline
    update(online: false)
  end
end
