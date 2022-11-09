class CreateHistory < ActiveRecord::Migration[6.1]
  def change
    create_table :histories do |t|
      t.timestamps
      t.integer :choice_id
    end
  end
end
