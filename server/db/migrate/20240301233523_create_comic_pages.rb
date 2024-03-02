class CreateComicPages < ActiveRecord::Migration[6.1]
  def change
    create_table :comic_pages do |t|
      t.string :page_name
      t.text :page_desc
      t.integer :comic_id
      t.text :image_url

      t.timestamps
    end
  end
end
