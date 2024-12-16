class Disc < ApplicationRecord
  include CloudinaryHelper

  before_save :normalize_genre

  has_one_attached :photo
  has_one_attached :audio
  has_many :tracks
  has_many :comments, dependent: :destroy  # Un disque peut avoir plusieurs commentaires
  has_many :wishlists
  has_many :collections

  validates :title, presence: true
  validates :artist, presence: true
  validates :genre, presence: true
  #validates :suggested_price, presence: true, numericality: { greater_than: 0 }
  validates :label, presence: true
  validates :cat_number, presence: true
  validates :cover_url, presence: true, allow_blank: true
  def audio_info
    [
      {
        title: title,
        audio_url: self.audio.attached? ? cl_path(audio.key, resource_type: :video) : "",
        cover_url: cover_url
      }
    ]

  end

  # Méthode pour calculer la moyenne du rating
  def average_rating
    comments.average(:rating).to_f
  end
  
  private

  def normalize_genre
    self.genre = genre.downcase if genre.present?
  end
end
