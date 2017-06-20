class CreateShelves < ActiveRecord::Migration
  def change
    create_table :shelves do |t|
      t.string :shelf_ew
      t.integer :shelf_no
      t.integer :x
      t.integer :z
      t.integer :kind

      t.timestamps null: false
    end
  end
end
