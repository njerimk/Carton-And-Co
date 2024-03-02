class UsersController < ApplicationController
    class UsersController < ApplicationController
        def index
          @users = User.all 
          render json: UserSerializer.new(@users).to_serialized_json
        end
      
        def show
          @user = User.find(params[:id])
          @commenters = @user.comments_to_this_user.new  
          render json:  UserSerializer.new(@user).to_serialized_json
        end
      
      
        def new
          @user = User.new
        end
      
        def create  
          @user = User.create(user_params)
          @comment.created_at = Date.today  
      
        end
      
        def update
          if params[:file]
            @user = User.find(params[:id])
            @user.image.attach(params[:file])
            @user.image_url = url_for(@user.image)
          end
      
        end
      
        def edit  
          @user = User.find(params[:id])
        end
      
        def destroy
          @user = User.find(params[:id])
          @user.destroy
          redirect_to '/users/new', :notice => "Your user has been deleted"
        end
      
      private 
        def user_params
          params.require(:user).permit(:user_name, :user_description, :comments_to_this_user, :created_at, :likes, :comics)
        end
      end
      
end
