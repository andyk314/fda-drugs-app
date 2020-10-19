class CreateSearchConversions < ActiveRecord::Migration[6.0]
  def change
    create_table :search_conversions do |t|
      t.string :brand_name
      t.string :product_number
      t.string :ip_address
      t.datetime :access_date
    end

    add_index :search_conversions, [:brand_name, :product_number]
  end
end
