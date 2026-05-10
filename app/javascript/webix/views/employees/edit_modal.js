import { EmployeeForm } from './form';
import { updateEmployee } from './services';

export function EmployeeEditModal() {
  return {
    view: 'window',
    id: 'employeeEditModal',
    width: 400,
    position: 'center',
    modal: true,
    move: true,
    head: {
      view: 'toolbar',
      cols: [
        {
          view: 'label',
          label: 'Edit Employee'
        },
        {
          view: 'icon',
          icon: 'wxi-close',
          click: () => {
            $$('employeeEditModal').hide();
          }
        }
      ]
    },
    body: {
      rows: [
        EmployeeForm('employeeEditForm'),
        {
          cols: [
            {},
            {
              view: 'button',
              value: 'Cancel',
              width: 100,
              click: () => {
                $$('employeeEditModal').hide();
              }
            },
            {
              view: 'button',
              value: 'Save',
              width: 100,
              css: 'webix_primary',
              click: async () => {
                try {
                  const form = $$('employeeEditForm');
                  if (!form.validate()) {
                    webix.message({
                      type: 'error',
                      text: 'Please complete required fields'
                    });
                    return;
                  }
                  const values = form.getValues();
                  const updatedEmployee = await updateEmployee(
                    values.id,
                    values
                  );
                  $$('employeesTable').updateItem(
                    updatedEmployee.id,
                    updatedEmployee
                  );
                  $$('employeeEditModal').hide();
                  webix.message({
                    type: 'success',
                    text: 'Employee updated'
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
