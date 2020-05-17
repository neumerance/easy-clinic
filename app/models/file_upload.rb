class FileUpload < ApplicationRecord
  ALLOWED_MIME_TYPES = [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'audio/mpeg3',
    'audio/wav',
    'video/quicktime',
    'video/mpeg',
    'video/mp4',
    'video/x-flv',
    'video/3gpp',
    'video/x-ms-wmv',
    'application/pdf',
    'application/msword',
    'text/plain'
  ]

  belongs_to :attachment_for, polymorphic: true
  has_one_attached :file
  validates :file, attached: true, content_type: ALLOWED_MIME_TYPES, size: {
    less_than: 120.megabytes ,
    message: 'is not given between size'
  }
end
