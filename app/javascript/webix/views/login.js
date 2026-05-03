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
                            width: 350,
                            elements: [
                                { view: "text", name: "email", label: "Email" },
                                { view: "text", type: "password", name: "password", label: "Password" },
                                {
                                    view: "button",
                                    value: "Login",
                                    css: "webix_primary",
                                    click: () => {
                                        const values = this.getRoot().getValues();
                                        webix.ajax().post("/login", values);
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