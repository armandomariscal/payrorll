export function EmployeeEditModal() {
    return {
        view: "window",
        id: "employeeEditModal",
        width: 400,
        position: "center",
        modal: true,
        head: "Edit Employee",

        body: {
            view: "form",
            id: "employeeEditForm",

            elements: [
                {
                    view: "text",
                    name: "name",
                    label: "Name"
                },
                {
                    view: "text",
                    name: "email",
                    label: "Email"
                },
                {
                    view: "text",
                    name: "salary_base",
                    label: "Salary"
                },
                {
                    view: "datepicker",
                    name: "hire_date",
                    label: "Hire Date"
                },
                {
                    view: "text",
                    name: "status",
                    label: "Status"
                },

                {
                    margin: 10,
                    cols: [
                        {
                            view: "button",
                            value: "Cancel",
                            click: () => {
                                $$("employeeEditModal").hide();
                            }
                        },

                        {
                            view: "button",
                            value: "Save",
                            css: "webix_primary",

                            click: async () => {
                                const form = $$("employeeEditForm");
                                const values = form.getValues();

                                try {
                                    const response = await fetch(
                                        `http://localhost:3000/api/employees/${values.id}`,
                                        {
                                            method: "PUT",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                employee: values
                                            })
                                        }
                                    );

                                    if (!response.ok) {
                                        throw new Error("Failed to update employee");
                                    }

                                    const updatedEmployee = await response.json();

                                    const table = $$("employeesTable");

                                    table.updateItem(updatedEmployee.id, updatedEmployee);

                                    $$("employeeEditModal").hide();

                                    webix.message({
                                        type: "success",
                                        text: "Employee updated"
                                    });

                                } catch (error) {
                                    webix.message({
                                        type: "error",
                                        text: error.message
                                    });
                                }
                            }
                        }
                    ]
                }
            ]
        }
    };
}