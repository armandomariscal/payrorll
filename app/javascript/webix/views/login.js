import { JetView } from "webix-jet";

export default class LoginView extends JetView {
    config() {
        return {
            rows: [
                { template: "Payrorll System", type: "header" },
                {
                    cols: [
                        {},
                        {
                            view: "form",
                            id: "loginForm",
                            width: 350,
                            elements: [
                                { view: "text", name: "email", label: "Email" },
                                { view: "text", type: "password", name: "password", label: "Password" },
                                {
                                    view: "button",
                                    type: "button",
                                    value: "Login",
                                    css: "webix_primary",
                                    click: () => {
                                        const values = this.$$("loginForm").getValues();
                                        const csrf = document.querySelector('meta[name="csrf-token"]').content;

                                        webix.ajax()
                                            .headers({
                                                "Content-Type": "application/json",
                                                "Accept": "application/json",
                                                "X-CSRF-Token": csrf
                                            })
                                            .post("/login", JSON.stringify({
                                                user: values
                                            }))
                                            .then(() => {
                                                window.location.href = "/employees/webix";
                                            })
                                            .catch(() => {
                                                webix.message("Login incorrecto");
                                            });
                                    }
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
}