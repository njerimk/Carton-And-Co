class User < ApplicationRecord
    # has_secure_password
    has_many :comments, as: :commentable
    has_many :likes, as: :likeable
    has_many :user_comics
    has_many :comics, through: :user_comics
    has_one_attached :image

    # validates_presence_of :user_name
    # validates_uniqueness_of :user_name
end
