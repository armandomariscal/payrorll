import { JetView } from 'webix-jet';

export default class HomeView extends JetView {
  config() {
    return {
      padding: 30,
      rows: [
        {
          template: '<h1></h1>',
          borderless: true,
          height: 50
        },
        {
          template: '',
          borderless: true
        },
        {}
      ]
    };
  }
}
