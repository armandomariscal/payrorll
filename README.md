# PayRoRll

Modern payroll management system built with Ruby on Rails, PostgreSQL, and Webix SPA architecture.

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
app/
docs/
config/
test/
```

Additional project documentation is organized under:

```txt
docs/architecture
docs/commands
docs/devops
docs/domain
docs/workflow
```

```bash
git clone <repo>
cd payrorll
bundle install
bin/rails db:create db:migrate
bin/dev
```

## Getting Started

Clone the repository:

```bash
git clone <repo>
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
