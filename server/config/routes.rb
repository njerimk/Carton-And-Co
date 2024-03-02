Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :users
  resources :user_comics
  resources :comic_pages
  resources :comics
  namespace :api do
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
