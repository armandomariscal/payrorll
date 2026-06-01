class AddDepartmentToEmployees < ActiveRecord::Migration[8.1]
  def change
    add_reference :employees, :department, null: true, foreign_key: true

    reversible do |dir|
      dir.up do
        if Employee.any?
          default_dept = Department.find_or_create_by!(
            name: "General", 
            code: "GEN", 
            description: "Default department created during migration."
          )
          Employee.where(department_id: nil).update_all(department_id: default_dept.id)
        end
      end
    end

    change_column_null :employees, :department_id, false
  end
end
