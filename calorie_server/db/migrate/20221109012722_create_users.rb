class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, unique: true
      t.string :first_name
      t.string :last_name
      t.integer :calories
      t.string :password
      t.string :food_calories_range
      t.string :gender
    end
  end
end
