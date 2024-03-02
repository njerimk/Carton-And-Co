class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.references :likeable, polymorphic: true, null: false
      t.references :user, null: false, foreign_key: true
      t.references :comic, null: false, foreign_key: true
      t.references :comic_page, null: false, foreign_key: true

      t.timestamps
    end
      add_index :likes, [:user_id, :likeable_type, :likeable_id], unique: true, name: 'index_likes_on_user_and_likeable'
      add_index :likes, [:comic_id, :likeable_type, :likeable_id], unique: true, name: 'index_likes_on_comic_and_likeable'
      add_index :likes, [:comic_page_id, :likeable_type, :likeable_id], unique: true, name: 'index_likes_on_comic_page_and_likeable'

  end
end
