# app/serializers/comic_serializer.rb
class ComicSerializer < ActiveModel::Serializer
  attributes :id, :title, :comic_desc, :image_url, :bg_image_url
end

