import LoginView from "./views/login";
import { JetApp } from "webix-jet";

export async function initApp() {
  const path = window.location.pathname;

  if (path === "/") {
    initJetApp();
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