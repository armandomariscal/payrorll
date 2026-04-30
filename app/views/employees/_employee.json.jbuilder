json.extract! employee, :id, :name, :email, :salary_base, :hire_date, :status, :created_at, :updated_at
json.url employee_url(employee, format: :json)
