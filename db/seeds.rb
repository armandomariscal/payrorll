# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Create sample employees
Employee.find_or_create_by!(name: "Carla López") do |e|
  e.email = "clopez@example.com"
  e.salary_base = 3500.00
  e.hire_date = Date.today - 365.days
  e.status = "active"
end

Employee.find_or_create_by!(name: "Juan García") do |e|
  e.email = "jgarcia@example.com"
  e.salary_base = 3000.00
  e.hire_date = Date.today - 180.days
  e.status = "active"
end

Employee.find_or_create_by!(name: "Estrella Pérez") do |e|
  e.email = "eperez@example.com"
  e.salary_base = 4000.00
  e.hire_date = Date.today - 90.days
  e.status = "active"
end

puts "Seeds created successfully!"
