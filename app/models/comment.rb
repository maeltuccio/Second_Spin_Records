class Comment < ApplicationRecord
  belongs_to :disc
  belongs_to :user
end
