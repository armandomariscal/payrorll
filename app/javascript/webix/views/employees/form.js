export function EmployeeForm(id) {
  return {
    view: 'form',
    id,
    elements: [
      {
        view: 'text',
        name: 'id',
        hidden: true
      },
      {
        view: 'text',
        name: 'name',
        label: 'Name',
        required: true
      },
      {
        view: 'text',
        name: 'email',
        label: 'Email'
      },
      {
        view: 'text',
        name: 'salary_base',
        label: 'Salary',
        required: true
      },
      {
        view: 'datepicker',
        name: 'hire_date',
        label: 'Hire Date'
      }
    ]
  };
}
