class UsersController < ApplicationController
        def index
          @users = User.all 
          render json: UserSerializer.new(@users).to_serialized_json
        end
      
        def show
          @user = User.find(params[:id])
          render json:  UserSerializer.new(@user).to_serialized_json
        end
      
      
        def new
          @user = User.new
        end
      
        def create  
          @user = User.create(user_params)
          # If you want to create a comment along with the user
          # Comment.create(user: @user, content: "Initial comment", created_at: Time.current)
          render json: UserSerializer.new(@user).to_json
      
        end
      
        def update
          if params[:file]
            @user = User.find(params[:id])
            @user.image.attach(params[:file])
            render json: UserSerializer.new(@user).to_json
          end
      
        end
      
        def edit  
          @user = User.find(params[:id])
        end
      
        def destroy
          @user = User.find(params[:id])
          @user.destroy
          render json: { message: "User has been deleted" }
        end
      
      private 
        def user_params
          params.require(:user).permit(:user_name, :user_description)

        end
    
      
end
