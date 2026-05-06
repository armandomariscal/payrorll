# Architecture Decisions

## Why Webix instead of Hotwire or React?

- Faster internal tool development
- Lower frontend complexity
- Tight integration with Rails views

## Why hybrid (Rails + SPA)?

- Maintain server-rendered simplicity where possible
- Use SPA only for complex UI (employees)

## Authentication

- Devise for standardization and security
- Controllers scoped under `users/`