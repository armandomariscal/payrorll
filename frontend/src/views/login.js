import { JetView } from 'webix-jet';

export default class LoginView extends JetView {
  config() {
    return {
      rows: [
        { template: 'Payrorll System', type: 'header' },
        {
          cols: [
            {},
            {
              view: 'form',
              id: 'loginForm',
              width: 350,
              elements: [
                {
                  view: 'text',
                  name: 'email',
                  label: 'Email',
                  labelWidth: 100,
                  required: true
                },
                {
                  view: 'text',
                  type: 'password',
                  name: 'password',
                  label: 'Password',
                  labelWidth: 100,
                  required: true
                },
                {
                  view: 'button',
                  value: 'Login',
                  css: 'webix_primary',
                  click: () => this.doLogin()
                }
              ]
            },
            {}
          ]
        },
        {}
      ]
    };
  }

  doLogin() {
    const form = this.$$('loginForm');

    if (!form.validate()) {
      webix.message({
        type: 'error',
        text: 'Por favor, ingresa tus credenciales'
      });
      return;
    }

    const values = form.getValues();
    const csrfToken = document.querySelector(
      'meta[name="csrf-token"]'
    )?.content;

    const ajax = webix.ajax();

    ajax.master = { withCredentials: true };

    ajax
      .headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-CSRF-Token': csrfToken || ''
      })
      .post(
        '/login',
        JSON.stringify({
          user: {
            email: values.email,
            password: values.password
          }
        })
      )
      .then((response) => {
        webix.message({
          type: 'success',
          text: 'Sesión iniciada correctamente'
        });
        this.show('/top/home');
      })
      .catch((xhr) => {
        let errorMsg = 'Login failed';
        try {
          const resp = JSON.parse(xhr.responseText);
          errorMsg = resp.error || errorMsg;
        } catch (e) {}

        webix.message({
          type: 'error',
          text: errorMsg
        });
      });
  }
}
