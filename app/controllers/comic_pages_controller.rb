class ComicPagesController < ApplicationController
    def index
        @comic_pages = ComicPage.all 
        render json:  ComicPageSerializer.new(@comic_pages).to_serialized_json
  end

  def show
      @comic_page = ComicPage.find(params[:id]) 
      render json:  ComicPageSerializer.new(@comic_page).to_serialized_json
  end


  def create
    comic_page = ComicPage.new(page_name: params[:page_name], page_desc: params[:page_desc], comic_id: params[:comic_id])
    comic_page.image.attach(params[:image_url])
    comic_page.save
    comic_page.image_url = url_for(comic_page.image)
    comic_page.save
    
    render json: ComicPageSerializer.new(comic_page).to_serialized_json
  end

  # def new_comment
  #   @comic_page = ComicPage.create(comic_page_params)
  #   @comment = @comic_page.comments.new(comment_)
  # end


  def update
    @comic_page = ComicPage.find(params[:id])
    if @comic_page.update_attributes(params[:comic_page])
      redirect_to :action => 'show', :id => @comic_page
    else
      @comic_page = comic_page.find(:all)
      render :action => 'edit'
    end

  end

  def destroy
    @comic_page = ComicPage.find(params[:id])
    @comic_page.destroy

  end

  private 
  def comic_page_params
    params.require(:comic_page).permit(:page_name, :page_desc, :comic_id)
  end

end
