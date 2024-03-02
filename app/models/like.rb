class Like < ApplicationRecord
  belongs_to :likeable, polymorphic: true
  belongs_to :user
  belongs_to :comic
  belongs_to :comic_page
  
end
