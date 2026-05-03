import LoginView from "./views/login";
import { initWebixEmployees } from "./views/employees/";
import { JetApp } from "webix-jet";

export async function initApp() {
  const path = window.location.pathname;

  if (path === "/") {
    initJetApp();
    return;
  }

  if (path.startsWith("/employees/webix")) {
    await initWebixEmployees("webix-container");
    return;
  }

}

function initJetApp() {
  const app = new JetApp({
    id: "main",
    start: "/login",
    debug: true,
    views: {
      login: LoginView
    }
  });

  app.render(document.getElementById("app"));
}