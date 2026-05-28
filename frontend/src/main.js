import { JetApp, EmptyRouter } from 'webix-jet';

export default class App extends JetApp {
  constructor() {
    super({
      id: 'payrorll-spa',
      version: '1.0',
      router: EmptyRouter,
      start: '/login',
      debug: true,
      views: (name) => {
        return import(`./views/${name}.js`).then((module) => module.default);
      }
    });
  }
}

webix.ready(() => {
  new App().render();
});
