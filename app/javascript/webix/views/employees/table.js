import { TableActions } from '../../shared/table_actions';

export function EmployeesTable(employees = []) {
  return {
    view: 'datatable',
    id: 'employeesTable',

    columns: [
      { id: 'id', header: 'ID', width: 50 },

      {
        id: 'name',
        header: 'Name',
        fillspace: true
      },

      {
        id: 'email',
        header: 'Email',
        fillspace: true
      },

      {
        id: 'salary_base',
        header: 'Salary Base',
        width: 120
      },

      {
        id: 'hire_date',
        header: 'Hire Date',
        width: 120
      },

      {
        id: 'status',
        header: 'Status',
        width: 100
      },

      TableActions(['edit', 'delete'])
    ],

    data: employees,

    onClick: {
      'delete-btn': async (_, id) => {
        const table = $$('employeesTable');

        const employee = table.getItem(id);

        webix.confirm({
          title: 'Delete Employee',
          text: `Are you sure you want to delete ${employee.name}?`,
          ok: 'Delete',
          cancel: 'Cancel',
          type: 'confirm-danger',

          callback: async (result) => {
            if (!result) return;

            try {
              const response = await fetch(
                `http://localhost:3000/api/employees/${employee.id}`,
                {
                  method: 'DELETE'
                }
              );

              if (!response.ok) {
                throw new Error('Failed to delete employee');
              }

              table.remove(id);

              webix.message({
                type: 'success',
                text: 'Employee deleted'
              });
            } catch (error) {
              webix.message({
                type: 'error',
                text: error.message
              });
            }
          }
        });

        return false;
      },

      'edit-btn': (_, id) => {
        const table = $$('employeesTable');

        const employee = table.getItem(id);

        const form = $$('employeeEditForm');

        form.setValues(employee);

        $$('employeeEditModal').show();

        return false;
      }
    }
  };
}
