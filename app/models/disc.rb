class Disc < ApplicationRecord
  has_many :tracks
  has_many :comments
  has_many :wishlists
  has_many :collections
end
