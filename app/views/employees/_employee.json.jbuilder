json.extract! employee,
  :id,
  :name,
  :email,
  :department_id,
  :salary_base,
  :hire_date,
  :status,
  :created_at,
  :updated_at

json.department_name employee.department&.name

json.url employee_url(employee, format: :json)
