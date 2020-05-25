class CurrentUsersPresenceChannel < ApplicationCable::Channel
  STREAM_AFFIX = 'user_presence_for'.freeze

  def subscribed
    current_user.appear_online
    ::UsersPresenceChannel.broadcast_resource(current_user.online, current_user.id)
  end

  def unsubscribed
    current_user.appear_offline
    ::UsersPresenceChannel.broadcast_resource(current_user.online, current_user.id)
  end

  def appear(bool)
    current_user.update(online: bool)
    ::UsersPresenceChannel.broadcast_resource(current_user.online, current_user.id)
  end
end
