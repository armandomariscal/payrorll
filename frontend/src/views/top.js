import { JetView } from 'webix-jet';

export default class TopView extends JetView {
  config() {
    const topMenu = {
      view: 'toolbar',
      css: 'webix_dark',
      height: 50,
      elements: [
        { view: 'label', label: 'Payroll Admin', width: 150 },
        {
          view: 'menu',
          id: 'top:menu',
          layout: 'x',
          router: 'router',
          data: [
            { id: 'home', value: 'Home', icon: 'wxi-home' },
            { id: 'employees', value: 'Employees', icon: 'wxi-user' },
            { id: 'departments', value: 'Departments', icon: 'wxi-columns' }
          ],
          click: (id) => {
            this.show(id);
          }
        },
        {},
        {
          view: 'button',
          type: 'icon',
          icon: 'wxi-close',
          label: 'Logout',
          width: 100,
          css: 'webix_transparent',
          click: () => this.logout()
        }
      ]
    };

    return {
      rows: [topMenu, { $subview: true }]
    };
  }

  logout() {
    const BACKEND_URL = 'http://localhost:3000';
    webix
      .ajax()
      .del(`${BACKEND_URL}/users/sign_out`)
      .then(() => this.show('/login'))
      .catch(() => this.show('/login'));
  }
}
