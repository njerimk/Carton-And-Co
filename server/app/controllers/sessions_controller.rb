class SessionsController < ApplicationController
   include CurrentUserConcern

   def create
    user_params = params.require(:user).permit(:user_name, :password)
    user = User.find_by(user_name: user_params[:user_name]).try(:authenticate, user_params[:password])
  
    if user
      session[:user_id] = user.id
      render json: { status: :created, logged_in: true, user: user }
    else
      render json: { status: 401, error: 'Unauthorized' }
    end
  end
  

    def logged_in
        if @current_user
            render json: {
                logged_in: true,
                user: @current_user
            }
        else 
            render json: {
                logged_in: false
            }
        end
    end

    def logout
        reset_session
        render json: { status: 200, logged_out: true }
    end

 
end
