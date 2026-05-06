# Data Model

## Employees
Basic employee information

## Payrolls
Represents a weekly payroll calculation

## Relationships

- Employee has many Payrolls
- Payroll belongs to Employee

## Design Decisions

- Payrolls are immutable once closed
- Calculations stored explicitly (no recomputation)

## Future Improvements

- Add audit logs
- Add versioning
