class UsersPresenceChannel < ApplicationCable::Channel
  STREAM_AFFIX = 'user_presence_for'.freeze

  def subscribed
    stream_from "#{STREAM_AFFIX}_#{params[:user_id]}"
  end

  def self.broadcast_resource(is_online, user_id)
    ActionCable.server.broadcast(
      "#{STREAM_AFFIX}_#{user_id}",
      is_online
    )
  end
end
