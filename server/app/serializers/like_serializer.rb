class LikeSerializer < ActiveModel::Serializer
  attributes :id
  def initialize(like_object)
    @like = like_object
   end

   def to_serialized_json
      @like.to_json(:include => {
          :likeable_id,
          :likeable_type 
          }
            
          )
      
     end 

end
