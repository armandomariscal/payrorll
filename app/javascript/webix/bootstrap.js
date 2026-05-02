import { initApp } from "./app";

function mount() {
  initApp();
}

// Rails Turbo support
document.addEventListener("DOMContentLoaded", mount);
document.addEventListener("turbo:load", mount);