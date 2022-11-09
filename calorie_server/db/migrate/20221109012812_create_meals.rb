class CreateMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.integer :calories
      t.string :category
      t.integer :cuisine_id
      t.string :img_url
    end
  end
end
