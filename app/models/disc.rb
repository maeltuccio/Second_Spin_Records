class Disc < ApplicationRecord
  before_save :normalize_genre

  has_one_attached :photo
  has_one_attached :audio
  has_many :tracks
  has_many :comments
  has_many :wishlists
  has_many :collections

  validates :title, presence: true
  validates :artist, presence: true
  validates :genre, presence: true
  validates :suggested_price, presence: true, numericality: { greater_than: 0 }
  validates :label, presence: true
  validates :release_date, presence: true
  validates :cat_number, presence: true, uniqueness: true
  validates :cover_url, presence: true, allow_blank: true

  private

  def normalize_genre
    self.genre = genre.downcase if genre.present?
  end
end
