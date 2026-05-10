import { getEmployees } from "./services";
import { EmployeesTable } from "./table";
import { EmployeeEditModal } from "./edit_modal";
import { EmployeeAddModal } from "./add_modal";
import { logout } from "../logout";

export async function initWebixEmployees(
  containerId = "webix-container"
) {
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
          {
            view: "label",
            label: "Employees"
          },
          {},
          {
            view: "button",
            value: "Add",
            width: 90,
            css: "webix_primary",
            click: () => {
              const form = $$("employeeCreateForm");

              form.clear();

              $$("employeeAddModal").show();
            }
          },

          {
            view: "button",
            value: "Logout",
            width: 90,
            css: "webix_danger",
            click: logout
          }
        ]
      },

      EmployeesTable(employees)
    ]
  });

  webix.ui(EmployeeEditModal());

  webix.ui(EmployeeAddModal());
}