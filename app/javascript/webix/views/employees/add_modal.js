import { EmployeeForm } from './form';
import { createEmployee } from './services';

export function EmployeeAddModal() {
  return {
    view: 'window',
    id: 'employeeAddModal',
    width: 400,
    position: 'center',
    modal: true,
    move: true,
    head: {
      view: 'toolbar',
      cols: [
        {
          view: 'label',
          label: 'Add Employee'
        },
        {
          view: 'icon',
          icon: 'wxi-close',
          click: () => $$('employeeAddModal').hide()
        }
      ]
    },
    body: {
      rows: [
        EmployeeForm('employeeCreateForm'),
        {
          cols: [
            {},
            {
              view: 'button',
              value: 'Cancel',
              width: 100,
              click: () => $$('employeeAddModal').hide()
            },
            {
              view: 'button',
              value: 'Create',
              width: 100,
              css: 'webix_primary',
              click: async () => {
                try {
                  const form = $$('employeeCreateForm');
                  if (!form.validate()) {
                    webix.message({
                      type: 'error',
                      text: 'Please complete required fields'
                    });
                    return;
                  }
                  const values = form.getValues();
                  const newEmployee = await createEmployee(values);
                  $$('employeesTable').add(newEmployee);
                  form.clear();
                  $$('employeeAddModal').hide();
                  webix.message({
                    type: 'success',
                    text: 'Employee created'
                  });
                } catch (error) {
                  webix.message({
                    type: 'error',
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
