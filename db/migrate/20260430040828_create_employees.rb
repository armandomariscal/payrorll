class CreateEmployees < ActiveRecord::Migration[8.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :email
      t.decimal :salary_base
      t.date :hire_date
      t.string :status

      t.timestamps
    end
  end
end
