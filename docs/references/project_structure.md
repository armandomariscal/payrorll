# Project Structure

This project follows a conventional Ruby on Rails structure with some custom organization for frontend (Webix) and API layering.

## Key Directories

### app/controllers
- `api/`: Base API layer (`Api::BaseController`)
- `employees_controller.rb`: CRUD + Webix integration
- `users/`: Authentication via Devise

### app/models
- `employee.rb`: Core domain model
- `user.rb`: Authentication (Devise)

### app/javascript
Custom frontend organization using Webix:

- `webix/`: SPA-like structure
  - `views/employees/`: UI + services separation
  - `app.js`: App entry point

### app/views
- Standard Rails views + JSON builders
- `employees/webix.html.erb`: Entry point for Webix UI

## Architectural Notes

- Hybrid approach: Rails views + Webix SPA components
- JSON endpoints used for frontend interaction
- Devise handles authentication flows

## Conventions

- Services colocated with frontend views (`services.js`)
- API namespace prepared for future expansion
- Separation between HTML and JSON responses
