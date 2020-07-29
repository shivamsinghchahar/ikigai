class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.index :email, unique: true
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
