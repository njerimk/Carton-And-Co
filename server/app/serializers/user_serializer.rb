class UserSerializer < ActiveModel::Serializer
  attributes :id

  def initialize(user_object)
    @user = user_object
  end

  def to_serialized_json
    @user.to_json(
      include: {
        likes: { only: [:id, :num_likes] },
        comics: { only: [:id, :title, :created_at, :image_url] },
        comments: {only: [:content, :commentable_type]}
       
      }
    )
  end

    def comics
      Comic.with_attached_image.where(user_id: object.id)
  end

  def image_url
    return nil unless @user.image.attached?

    variant = @user.image.variant(resize: "110x110")
    rails_representation_url(variant, only_path: true)
  end
  
end
