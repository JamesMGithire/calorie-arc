class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :usernanme
      t.string :first_name
      t.string :last_name
      t.int :calories
      t.string :password
      t.string :food_calories_range
      t.string :gender
    end
  end
end
