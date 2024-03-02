class CommentsController < ApplicationController
    def index
        @comments = Comment.all 
        render json: @comments.to_json(include: :user)
      end
    
      def show
        @comment = Comment.find(params[:id])
        render json:  @comment.to_json(include: :user)
    
      end
    
     
      def user_images_for_comic_page
        page_comments_array = Comment.where(params[:commentable_id => ""])
        user_info = page_comments_array.map {|comment|
            Hash["name" => comment.user.id ,
            "img" => comment.user.image_url]
        } 
        render json: user_info      
    
      end 
    
    
      def create
        # commentable = find_commentable
        
        comment = Comment.create(comment_params)
        # byebug# comment = commentable.comments.build(comment_params)
        render json: comment  
    
      end        
      
    
      # def update
      #   @comment = Comment.find(params[:id])
      #   if @comment.update_attributes(params[:comment])
      #     redirect_to :action => 'show', :id => @comment
      #   else
      #     @comment = comment.find(:all)
      #     render :action => 'update'
      #   end
      # end
    
    
      # def destroy
      #   @comment = Comment.find(params[:id])
      #   @comment.destroy
      # end
    
    
      private
        def find_commentable
        params.each do |name, value|
          if name =~ /(.+)_id$/
            return $1.classify.constantize.find(value)
          end
        end
        nil
      end
    
    
      def comment_params
        params.require(:comment).permit(:content, :commentable_id, :commentable_type, :user_id, :user_name, :image_url)
        # permit(:body).merge(user_id: current_user.id)
      end 
    
end
