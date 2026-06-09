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
![Testing](https://img.shields.io/badge/Testing-Minitest-00C853)
![Quality](https://img.shields.io/badge/Code_Quality-RuboCop-000000)
![Security](https://img.shields.io/badge/Security-Brakeman-orange)
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

### Testing & Quality

- Minitest
- Fixtures
- RuboCop
- Brakeman
- Bundler Audit

### DevOps & Tooling

- Docker
- GitHub Actions
- Kamal

## Testing

The project includes automated test coverage for:

- Employee model validations
- User authentication validations
- Employee CRUD controller flows
- Protected routes and authentication redirects
- Invalid request handling
- API and frontend integration flows

Run the test suite:

```bash
bin/rails test
```

Run linting:

```bash
bin/rubocop
```

Run security analysis:

```bash
bin/brakeman
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
