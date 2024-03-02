class ComicsController < ApplicationController
    def index
        comics = Comic.all 
        render json: ComicSerializer.new(comics).to_serialized_json
      end
    
      def show
        @comic = Comic.find(params[:id])
        render json: ComicSerializer.new(@comic).to_serialized_json
        
      end
    
       def create  
        @comic = Comic.create(comic_params)
        render json: comic
      end
    
     
    
      def update
        if params[:file]
          @comic = Comic.find(params[:id])
          @comic.image.attach(params[:file])
          @comic.image_url = url_for(@comic.image)
      
        end
      end
    
      def users_comics
        user = User.find(params[:id])
        comics = user.comics
        render json: comics
      end 
    
    
      def destroy
        @comic = Comic.find(params[:id])
        @comic.destroy
      end
    
    private 
      def comic_params
        params.require(:comic).permit(:title, :comic_desc, :users, :likes, :comic_pages)
      end
    
end
