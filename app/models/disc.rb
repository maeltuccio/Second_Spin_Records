class Disc < ApplicationRecord
  has_one_attached :photo
  has_one_attached :audio
  has_many :tracks
  has_many :comments
  has_many :wishlists
  has_many :collections

end
