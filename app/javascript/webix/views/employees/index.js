import { getEmployees } from "./services";
import { EmployeesTable } from "./table";

export async function initWebixEmployees(containerId = "webix-container") {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn("Webix container not found");
    return;
  }

  const employees = await getEmployees();

  webix.ui({
    container,
    rows: [
      {
        view: "toolbar",
        height: 50,
        elements: [
          { view: "label", label: "Employees" }
        ]
      },
      EmployeesTable(employees)
    ]
  });
}