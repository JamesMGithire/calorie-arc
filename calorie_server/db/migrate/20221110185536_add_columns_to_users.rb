class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :age, :integer
    add_column :users, :weight, :integer
    add_column :users, :height, :integer
    add_column :users, :activity, :string
    add_column :users, :allergies, :text
  end
end
