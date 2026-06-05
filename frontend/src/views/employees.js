import { JetView } from 'webix-jet';

export default class EmployeesView extends JetView {
  config() {
    const BACKEND_URL = '';

    const table = {
      view: 'datatable',
      id: 'emp_table',
      select: 'row',
      columns: [
        {
          id: 'name',
          header: 'Name',
          adjust: true,
          minWidth: 150,
          sort: 'string'
        },
        {
          id: 'email',
          header: 'Email',
          fillspace: true,
          sort: 'string'
        },
        {
          id: 'department_name',
          header: 'Department',
          adjust: true,
          width: 150,
          sort: 'string'
        },
        {
          id: 'salary_base',
          minWidth: 150,
          css: { 'text-align': 'right' },
          header: {
            text: 'Base Salary',
            css: { 'text-align': 'right' }
          },
          format: webix.i18n.priceFormat,
          sort: 'int'
        },
        {
          id: 'hire_date',
          header: 'Hire Date',
          minWidth: 150,
          sort: 'date'
        },
        {
          id: 'status',
          header: 'Status',
          minWidth: 150,
          sort: 'string'
        }
      ],
      url: `${BACKEND_URL}/employees.json`,
      save: {
        $proxy: true,
        load: function (view, callback) {
          return webix.ajax().get(`${BACKEND_URL}/employees.json`, callback);
        },
        save: function (view, update, dp, callback) {
          const id = update.id;
          const operation = update.operation;
          const data = { ...update.data };

          delete data.id;
          delete data.operation;

          const payload = { employee: data };

          if (operation === 'insert') {
            return webix
              .ajax()
              .headers({ 'Content-Type': 'application/json' })
              .post(
                `${BACKEND_URL}/employees.json`,
                JSON.stringify(payload),
                callback
              );
          } else if (operation === 'update') {
            return webix
              .ajax()
              .headers({ 'Content-Type': 'application/json' })
              .put(
                `${BACKEND_URL}/employees/${id}.json`,
                JSON.stringify(payload),
                callback
              );
          } else if (operation === 'delete') {
            return webix
              .ajax()
              .del(`${BACKEND_URL}/employees/${id}.json`, null, callback);
          }
        }
      },
      on: {
        onAfterSelect: (id) => {
          const item = this.$$('emp_table').getItem(id);
          this.$$('emp_form').setValues(item);
        }
      }
    };

    const form = {
      view: 'form',
      id: 'emp_form',
      width: 350,
      elements: [
        { template: 'Employee Details', type: 'section' },
        {
          view: 'text',
          name: 'name',
          label: 'Name',
          labelWidth: 110,
          required: true
        },
        {
          view: 'text',
          name: 'email',
          label: 'Email',
          labelWidth: 110,
          validate: webix.rules.isEmail
        },
        {
          view: 'combo',
          name: 'department_id',
          label: 'Departments',
          labelWidth: 110,
          options: {
            url: `${BACKEND_URL}/departments_select_list.json`,
            scheme: {
              $init(obj) {
                obj.value = obj.name;
              }
            }
          }
        },
        {
          view: 'text',
          name: 'salary_base',
          label: 'Base Salary',
          labelWidth: 110,
          required: true,
          validate: webix.rules.isNumber
        },
        {
          view: 'datepicker',
          name: 'hire_date',
          label: 'Hire Date',
          labelWidth: 110,
          stringResult: true,
          format: '%Y-%m-%d'
        },
        {
          view: 'richselect',
          name: 'status',
          label: 'Status',
          labelWidth: 110,
          required: true,
          value: 'active',
          options: [
            { id: 'active', value: 'Active' },
            { id: 'inactive', value: 'Inactive' }
          ]
        },
        {
          margin: 10,
          cols: [
            { view: 'button', value: 'New', click: () => this.clearForm() },
            {
              view: 'button',
              value: 'Save',
              css: 'webix_primary',
              click: () => this.saveData()
            },
            {
              view: 'button',
              value: 'Delete',
              css: 'webix_danger',
              click: () => this.deleteData()
            }
          ]
        }
      ]
    };

    return {
      cols: [table, { view: 'resizer' }, form]
    };
  }

  clearForm() {
    this.$$('emp_form').clear();
    this.$$('emp_form').setValues({ status: 'active' });
    this.$$('emp_table').unselect();
  }

  saveData() {
    const form = this.$$('emp_form');
    if (!form.validate()) {
      webix.message({
        type: 'error',
        text: 'Please fill in all required fields correctly'
      });
      return;
    }

    const values = form.getValues();
    const table = this.$$('emp_table');

    if (values.id) {
      table.updateItem(values.id, values);
      webix.message({
        type: 'success',
        text: 'Employee updated successfully'
      });
    } else {
      table.add(values);
      webix.message({
        type: 'success',
        text: 'Employee created successfully'
      });
    }
    this.clearForm();
  }

  deleteData() {
    const table = this.$$('emp_table');
    const id = table.getSelectedId();

    if (!id) {
      webix.message({
        type: 'error',
        text: 'Please select an employee from the table'
      });
      return;
    }

    webix.confirm({
      title: 'Delete Employee',
      text: 'Are you sure you want to delete this employee record?',
      callback: (result) => {
        if (result) {
          table.remove(id);
          this.clearForm();
          webix.message({
            type: 'success',
            text: 'Employee deleted successfully'
          });
        }
      }
    });
  }
}
