class Account < ApplicationRecord
    has_secure_password
    has_many :comments_from_this_account, foreign_key: :commenter_id, class_name: "ProfileComment"
    has_many :commentees, through: :comments_from_this_account
    has_many :comments_to_this_account, foreign_key: :commentee_id, class_name: "ProfileComment"
    has_many :commenters, through: :comments_to_this_account
 
    has_many :likes, as: :likeable
    has_many :user_comics
    has_many :comics, through: :user_comics
    has_one_attached :image

    validates_presence_of :user_name
    validates_uniqueness_of :user_name

end
