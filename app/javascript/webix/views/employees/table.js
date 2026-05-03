export function EmployeesTable(employees = []) {
  return {
    view: "datatable",
    id: "employeesTable",
    columns: [
      { id: "id", header: "ID", width: 50 },
      { id: "name", header: "Name", fillspace: true },
      { id: "email", header: "Email", fillspace: true },
      { id: "salary_base", header: "Salary Base", width: 120 },
      { id: "hire_date", header: "Hire Date", width: 120 },
      { id: "status", header: "Status", width: 100 }
    ],
    data: employees
  };
}