class CreateComics < ActiveRecord::Migration[6.1]
  def change
    create_table :comics do |t|
      t.string :title
      t.text :comic_desc
      t.text :image_url
      t.text :bg_image_url

      t.timestamps
    end
  end
end
