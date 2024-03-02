class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |t|
      t.string :user_name
      t.text :user_desc
      t.text :image_url
      t.string :password_digest

      t.timestamps
    end
  end
end
