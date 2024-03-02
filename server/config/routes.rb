Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  root to: "static#home"
  get '/comic_pages/:id', to: 'comic_pages#show'
  post '/comic_pages', to: 'comic_pages#create'
  get '/comments', to: 'comments#index'
  post '/comments', to: 'comments#create'
  get '/comments/users/:commentable_id', to: 'comments#user_images_for_comic_page'
  
  get '/users/:id/comics', to: 'users#show'
  get '/users/:id/comics/:id', to: 'users#comics'
  post '/users_comics', to: 'comics#users_comics'

  get '/profile_comments', to: 'profile_comments#index'
  get '/profile_comments/:id', to: 'profile_comments#show'

  

  # get '/comments/:id', to: 'comments#show'
  # post '/comments', to: 'comments#create'
  

  #  resources :comic_pages,:users do 
  #   resources :comments
  #   resources :image_elements
  # end

  resources  :comics, :users do
    resources :likes, only: [:new, :index, :create]
    resources :image_elements
  end
  
  resources :comments 
  
  resources :likes, only: [:index, :show, :edit, :update, :destroy] 
  
  resources :image_elements




#ComicPage
  # get 'comic_page/index'
  # get 'comic_page/show'
  # get 'comic_page/new'
  # get 'comic_page/create'
  # get 'comic_page/update'
  # get 'comic_page/edit'
  # get 'comic_page/destroy'

#Comics
#   get 'comics/index'
#   get 'comics/show'
#   get 'comics/new'
#   get 'comics/create'
#   get 'comics/update'
#   get 'comics/edit'
#   get 'comics/destroy'

#Comments 
  # get 'comments/index'
#   get 'comments/show'
#   get 'comments/new'
#   get 'comments/create'
#   get 'comments/update'
#   get 'comments/edit'
#   get 'comments/destroy'

#Likes 
  # get 'likes/index'
  # get 'likes/show'
  # get 'likes/new'
  # get 'likes/create'
  # get 'likes/update'
  # get 'likes/edit'
  # get 'likes/destroy'


#Users 
  # get 'users/index'
  # get 'users/show'
  # get 'users/new'
  # get 'users/create'
  # get 'users/update'
  # get 'users/edit'
  # get 'users/destroy'
  

 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


end 

