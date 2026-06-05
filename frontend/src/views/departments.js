import { JetView } from 'webix-jet';

export default class DepartmentsView extends JetView {
  config() {
    const BACKEND_URL = '';

    const table = {
      view: 'datatable',
      id: 'dept_table',
      select: 'row',
      columns: [
        {
          id: 'code',
          header: 'Code',
          width: 100,
          sort: 'string'
        },
        {
          id: 'name',
          header: 'Department Name',
          fillspace: true,
          sort: 'string'
        },
        {
          id: 'description',
          header: 'Description',
          fillspace: true
        }
      ],
      url: `${BACKEND_URL}/departments.json`,
      save: {
        $proxy: true,
        load: function (view, callback) {
          return webix.ajax().get(`${BACKEND_URL}/departments.json`, callback);
        },
        save: function (view, update, dp, callback) {
          const id = update.id;
          const operation = update.operation;
          const data = { ...update.data };

          delete data.id;
          delete data.operation;

          const payload = { department: data };

          if (operation === 'insert') {
            return webix
              .ajax()
              .headers({ 'Content-Type': 'application/json' })
              .post(
                `${BACKEND_URL}/departments.json`,
                JSON.stringify(payload),
                callback
              );
          } else if (operation === 'update') {
            return webix
              .ajax()
              .headers({ 'Content-Type': 'application/json' })
              .put(
                `${BACKEND_URL}/departments/${id}.json`,
                JSON.stringify(payload),
                callback
              );
          } else if (operation === 'delete') {
            return webix
              .ajax()
              .del(`${BACKEND_URL}/departments/${id}.json`, null, callback);
          }
        }
      },
      on: {
        onAfterSelect: (id) => {
          const item = this.$$('dept_table').getItem(id);
          this.$$('dept_form').setValues(item);
        }
      }
    };

    const form = {
      view: 'form',
      id: 'dept_form',
      width: 350,
      elements: [
        { template: 'Department Details', type: 'section' },
        {
          view: 'text',
          name: 'code',
          label: 'Code',
          labelWidth: 100,
          required: true
        },
        {
          view: 'text',
          name: 'name',
          label: 'Name',
          labelWidth: 100,
          required: true
        },
        {
          view: 'textarea',
          name: 'description',
          label: 'Description',
          labelWidth: 100,
          height: 100
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
    this.$$('dept_form').clear();
    this.$$('dept_table').unselect();
  }

  saveData() {
    const form = this.$$('dept_form');
    if (!form.validate()) return;

    const values = form.getValues();
    const table = this.$$('dept_table');

    if (values.id) {
      table.updateItem(values.id, values);
      webix.message({
        type: 'success',
        text: 'Department updated successfully'
      });
    } else {
      table.add(values);
      webix.message({
        type: 'success',
        text: 'Department created successfully'
      });
    }
    this.clearForm();
  }

  deleteData() {
    const table = this.$$('dept_table');
    const id = table.getSelectedId();

    if (!id) {
      webix.message({
        type: 'error',
        text: 'Please select a department from the table'
      });
      return;
    }

    webix.confirm({
      title: 'Delete Department',
      text: '¿Are you sure you want to delete this department? Associated employees might be affected.',
      callback: (result) => {
        if (result) {
          table.remove(id);
          this.clearForm();
          webix.message({
            type: 'success',
            text: 'Department deleted successfully'
          });
        }
      }
    });
  }
}
