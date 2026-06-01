# Backend

- Generate the base Department scaffold (Model, Controller, and API routes)

```bash
rails g scaffold Department name:string code:string description:text
```

- Create a migration to add the foreign key (department_id) to the existing employees table

```bash
rails g migration AddDepartmentToEmployees department:references
```

---

## Data Models Relations

File: `app/models/department.rb`

- A department can have multiple employees.

- If a department is deleted, the employees will keep their records but their department_id changes to NULL.

```ruby
class Department < ApplicationRecord
    has_many :employees, dependent: :nullify
end
```

File: `app/models/employee.rb`

- Each employee belongs to one specific department.
- This requires the department_id column to be present in the database.

```ruby
class Employee < ApplicationRecord
    belongs_to :department
end
```
