class CreateHistory < ActiveRecord::Migration[6.1]
  def change
    create_table :histories do |t|
      t.timestamps
      t.integer :meal_id
      t.integer :user_id
    end
  end
end
