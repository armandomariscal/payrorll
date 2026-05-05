import { getEmployees } from "./services";
import { EmployeesTable } from "./table";
import { logout } from "../logout";

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
          { view: "label", label: "Employees" },
          {},
          {
            view: "button",
            value: "Logout",
            width: 100,
            css: "webix_danger",
            click: logout
          }
        ]
      },
      EmployeesTable(employees)
    ]
  });
}