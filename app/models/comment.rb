class Comment < ApplicationRecord
  belongs_to :disc
  belongs_to :user

  # Validations
  validates :rating, presence: true, inclusion: { in: 1..5 }
  validates :content, presence: true  # Valider la colonne content au lieu de comment
end
