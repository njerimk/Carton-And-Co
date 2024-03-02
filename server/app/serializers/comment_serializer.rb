class CommentSerializer < ActiveModel::Serializer
  attributes :id

  def initialize(comment_object)
    @comment = comment_object
   end

   def to_serialized_json
      @comment.to_json(:include => {
          
           :content,
           :commentable_id,
           :commentable_type
            }
          )
        
     end 

end
