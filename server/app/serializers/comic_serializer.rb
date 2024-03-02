# app/serializers/comic_serializer.rb
class ComicSerializer < ActiveModel::Serializer
  attributes :id, :title, :comic_desc, :image_url, :bg_image_url

  def initialize(comic_object)
    @comic = comic_object
  end

  def to_serialized_json
    @comic.to_json(:include => {
    :likes => {:only => [:id, :num_likes]},
    :users=>{:only => [:id, :user_name, :image_url]},
    :comic_pages =>{:except => [:page_desc, :updated_at]}
    })
  end

  def user
    User.with_attached_image.where(user_id: object.id)
  end



  def image_url
    variant = object.image.variant(resize: "110x110")
    return rails_representation_url(variant, only_path: true)
  end 

end

