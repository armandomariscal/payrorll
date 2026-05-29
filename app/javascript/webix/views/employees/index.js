import { getEmployees, getKeptEmployees } from './services';
import { EmployeesTable } from './table';
import { EmployeeEditModal } from './edit_modal';
import { EmployeeAddModal } from './add_modal';
import { logout } from '../logout';

export async function initWebixEmployees(containerId = 'webix-container') {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn('Webix container not found');
    return;
  }

  const employees = (await getKeptEmployees()) || [];

  function hasActiveFilters() {
    return (
      $$('employeeSearch')?.getValue() ||
      $$('employeeStatusFilter')?.getValue() !== 'all' ||
      $$('employeeDateFilter')?.getValue()
    );
  }

  function toggleClearFiltersButton() {
    const button = $$('clearFilters');

    if (!button) return;

    if (hasActiveFilters()) {
      button.show();
    } else {
      button.hide();
    }
  }

  function clearFilters() {
    $$('employeeSearch').setValue('');
    $$('employeeStatusFilter').setValue('all');
    $$('employeeDateFilter').setValue('');

    applyFilters();
  }

  function applyFilters() {
    const search = $$('employeeSearch')?.getValue()?.toLowerCase() || '';

    const status = $$('employeeStatusFilter')?.getValue() || 'all';

    const hireDate = $$('employeeDateFilter')?.getValue();

    const formattedDate = hireDate
      ? webix.Date.dateToStr('%Y-%m-%d')(hireDate)
      : null;

    $$('employeesTable').filter((employee) => {
      const matchesSearch =
        employee.name?.toLowerCase().includes(search) ||
        employee.email?.toLowerCase().includes(search);

      const matchesStatus = status === 'all' || employee.status === status;

      const matchesDate =
        !formattedDate || employee.hire_date === formattedDate;

      return matchesSearch && matchesStatus && matchesDate;
    });

    toggleClearFiltersButton();
  }

  webix.ui({
    container,
    rows: [
      {
        view: 'toolbar',
        height: 50,
        elements: [
          {
            view: 'label',
            label: 'Employees'
          },

          {
            view: 'text',
            id: 'employeeSearch',
            placeholder: 'Search employees...',
            width: 260,

            on: {
              onTimedKeyPress: applyFilters
            }
          },

          {
            view: 'richselect',
            id: 'employeeStatusFilter',
            width: 160,
            value: 'all',

            options: [
              { id: 'all', value: 'Status: All' },
              { id: 'active', value: 'Active' },
              { id: 'inactive', value: 'Inactive' }
            ],

            on: {
              onChange: applyFilters
            }
          },
          {
            view: 'datepicker',
            id: 'employeeDateFilter',
            width: 180,
            stringResult: true,
            placeholder: 'Hire Date',

            on: {
              onChange: applyFilters
            }
          },

          {
            view: 'button',
            id: 'clearFilters',
            value: 'Clear',
            width: 90,
            hidden: true,

            click: clearFilters
          },

          {},

          {
            view: 'button',
            value: 'Add',
            width: 90,
            css: 'webix_primary',
            click: () => {
              const form = $$('employeeCreateForm');

              form.clear();

              $$('employeeAddModal').show();
            }
          },

          {
            view: 'button',
            value: 'Logout',
            width: 90,
            css: 'webix_danger',
            click: logout
          }
        ]
      },
      EmployeesTable(employees),
      {
        view: 'pager',
        id: 'employeesPager',
        size: 25,
        group: 5,
        template:
          '{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}'
      }
    ]
  });

  webix.ui(EmployeeEditModal());
  webix.ui(EmployeeAddModal());
}
