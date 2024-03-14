import './commands';
import 'cypress-mochawesome-reporter/register';

require("cypress-xpath");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

const app = window.top;

if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none }";
  style.setAttribute("data-hide-command-log-request", "");

  app.document.head.appendChild(style);
}