# PayRoRll

Modern payroll management system built with Ruby on Rails, PostgreSQL, and Webix SPA architecture.

## Stack

![Ruby](https://img.shields.io/badge/Ruby-3.4-CC342D?logo=ruby)
![Rails](https://img.shields.io/badge/Rails-8.0-CC0000?logo=rubyonrails)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-4169E1?logo=postgresql)
![Webix](https://img.shields.io/badge/Webix-Jet-00BFFF)
![Devise](https://img.shields.io/badge/Devise-Auth-8A2BE2)
![JWT](https://img.shields.io/badge/JWT-API_Auth-000000?logo=jsonwebtokens)
![Hotwire](https://img.shields.io/badge/Hotwire-Turbo_+_Stimulus-FF4F00)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI-2088FF?logo=githubactions)
![Architecture](https://img.shields.io/badge/Architecture-Full_Stack_SPA-8A2BE2)

## Overview

Payrorll is a full-stack payroll platform focused on employee management, payroll operations, and internal administrative workflows.

The project is being developed as a production-oriented Rails application with emphasis on:

- RESTful API design
- SPA integration
- Authentication and authorization
- Backend architecture and domain organization
- Development workflows and engineering standards

## Current Features

- Employee management module
- Rails API endpoints
- Webix SPA integration
- Employee delete flow with API communication
- Session-based authentication with Devise
- JWT authentication support
- CORS configuration for SPA/API development
- PostgreSQL integration
- RuboCop and development tooling setup

## Planned Features

- Payroll periods
- Salary calculations
- Payslip generation
- Role-based access control
- Audit logging
- Reporting dashboards

## Tech Stack

- Ruby on Rails 8
- PostgreSQL
- Devise
- Devise JWT
- Rack CORS
- Hotwire (Turbo + Stimulus)

### Frontend

- Webix
- Webix Jet
- Hotwire
- Turbo
- Stimulus
- esbuild

### Tooling

- RuboCop
- Brakeman
- Bundler Audit
- Docker
- GitHub Actions

## Project Structure

```txt
 tree -I "log|tmp|storage|node_modules|vendor/bundle|public/assets|bin|lib|public|db|docs|.git"
.
├── app
│   ├── assets
│   │   ├── builds
│   │   │   ├── application.css
│   │   │   ├── application.css.map
│   │   │   ├── application.js
│   │   │   └── application.js.map
│   │   ├── images
│   │   └── stylesheets
│   │       └── application.css
│   ├── controllers
│   │   ├── api
│   │   │   ├── base_controller.rb
│   │   │   └── employees_controller.rb
│   │   ├── application_controller.rb
│   │   ├── concerns
│   │   ├── employees_controller.rb
│   │   ├── home_controller.rb
│   │   └── users
│   │       ├── confirmations_controller.rb
│   │       ├── omniauth_callbacks_controller.rb
│   │       ├── passwords_controller.rb
│   │       ├── registrations_controller.rb
│   │       ├── sessions_controller.rb
│   │       └── unlocks_controller.rb
│   ├── helpers
│   │   ├── api
│   │   │   ├── base_helper.rb
│   │   │   └── employees_helper.rb
│   │   ├── application_helper.rb
│   │   ├── employees_helper.rb
│   │   └── home_helper.rb
│   ├── javascript
│   │   ├── application.js
│   │   ├── controllers
│   │   │   ├── application.js
│   │   │   ├── hello_controller.js
│   │   │   └── index.js
│   │   └── webix
│   │       ├── app.js
│   │       ├── bootstrap.js
│   │       └── views
│   │           ├── employees
│   │           │   ├── index.js
│   │           │   ├── services.js
│   │           │   └── table.js
│   │           ├── login.js
│   │           └── logout.js
│   ├── jobs
│   │   └── application_job.rb
│   ├── mailers
│   │   └── application_mailer.rb
│   ├── models
│   │   ├── application_record.rb
│   │   ├── concerns
│   │   ├── employee.rb
│   │   └── user.rb
│   └── views
│       ├── api
│       │   ├── base
│       │   └── employees
│       ├── employees
│       │   ├── edit.html.erb
│       │   ├── _employee.html.erb
│       │   ├── _employee.json.jbuilder
│       │   ├── _form.html.erb
│       │   ├── index.html.erb
│       │   ├── index.json.jbuilder
│       │   ├── new.html.erb
│       │   ├── show.html.erb
│       │   ├── show.json.jbuilder
│       │   └── webix.html.erb
│       ├── home
│       │   └── index.html.erb
│       ├── layouts
│       │   ├── application.html.erb
│       │   ├── mailer.html.erb
│       │   └── mailer.text.erb
│       └── pwa
│           ├── manifest.json.erb
│           └── service-worker.js
├── config
│   ├── application.rb
│   ├── boot.rb
│   ├── bundler-audit.yml
│   ├── cable.yml
│   ├── cache.yml
│   ├── ci.rb
│   ├── credentials.yml.enc
│   ├── database.yml
│   ├── deploy.yml
│   ├── environment.rb
│   ├── environments
│   │   ├── development.rb
│   │   ├── production.rb
│   │   └── test.rb
│   ├── importmap.rb
│   ├── initializers
│   │   ├── assets.rb
│   │   ├── content_security_policy.rb
│   │   ├── cors.rb
│   │   ├── devise.rb
│   │   ├── filter_parameter_logging.rb
│   │   └── inflections.rb
│   ├── locales
│   │   ├── devise.en.yml
│   │   └── en.yml
│   ├── master.key
│   ├── puma.rb
│   ├── queue.yml
│   ├── recurring.yml
│   ├── routes.rb
│   └── storage.yml
├── config.ru
├── Dockerfile
├── Gemfile
├── Gemfile.lock
├── package.json
├── package-lock.json
├── Procfile.dev
├── Rakefile
├── README.md
├── script
├── test
│   ├── controllers
│   │   ├── api
│   │   │   ├── base_controller_test.rb
│   │   │   └── employees_controller_test.rb
│   │   ├── employees_controller_test.rb
│   │   └── home_controller_test.rb
│   ├── fixtures
│   │   ├── employees.yml
│   │   ├── files
│   │   └── users.yml
│   ├── helpers
│   ├── integration
│   ├── mailers
│   ├── models
│   │   ├── employee_test.rb
│   │   └── user_test.rb
│   ├── system
│   └── test_helper.rb
└── vendor
    └── javascript
```

Additional project documentation is organized under:

```txt
docs/architecture
docs/commands
docs/devops
docs/domain
docs/workflow
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/armandomariscal/payrorll/
cd payrorll
```

Install dependencies:

```bash
bundle install
```

Setup the database:

```bash
bin/rails db:create
bin/rails db:migrate
```

Start the development environment:

```bash
bin/dev
```

## Development Focus

This project is used to explore and apply backend engineering practices in Rails, including:

- API architecture
- Authentication flows
- CRUD operations
- Frontend/backend integration
- Documentation standards
- CI/CD workflows
- Maintainable project structure

## Status

Active development

## License

MIT
