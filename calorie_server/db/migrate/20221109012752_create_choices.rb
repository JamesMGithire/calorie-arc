class CreateChoices < ActiveRecord::Migration[6.1]
  def change
    create_table :choices do |t|
      t.integer :user_id
      t.integer :meal_id
    end
  end
end
