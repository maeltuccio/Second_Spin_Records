class Collection < ApplicationRecord
  belongs_to :disc
  belongs_to :user


  def is_owner?(usertest)
    user == usertest
  end
end
