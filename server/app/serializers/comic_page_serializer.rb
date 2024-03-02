class ComicPageSerializer < ActiveModel::Serializer
  attributes :id, :page_name, :page_desc, :comic_id, :image_url

  def initialize(comic_page_object)
    @comic_page = comic_page_object
  end

  def to_serialized_json
        @comic_page.to_json(:include => {
            :comic => {:except => [:comic_desc, :updated_at]},
            :comments => {:except => [:updated_at] 
              }}
            )
  end 

  def comic 
      Comic.with_attachedimage.where(comic_id: object.id)
  end
  
  def image_url
      variant = object.image.variant(resize: "960x1440")
      return rails_representation_url(variant, only_path: true)
  end 

end

