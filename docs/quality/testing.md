# Testing Strategy

- Minitest (default Rails)
- Controller tests for API endpoints
- Model tests for business logic

## Goal

Ensure system stability and prevent regressions in core flows.

## Critical Flows Covered

- Employee creation
- Payroll calculation
- Authentication

## Missing Coverage

- Edge cases in calculations
- Failure scenarios

## Strategy

Prioritize business-critical logic over UI tests

---

## Automated Tests

```bash
bin/rails test
```

```bash
bin/rails test test/controllers/employees_controller_test.rb
```

```bash
bin/rails test test/controllers/departments_controller_test.rb
```

## Static Analysis

```bash
bin/rubocop
```

## Security Scanning

```bash
bin/brakeman
```

```bash
bin/bundler-audit
```
