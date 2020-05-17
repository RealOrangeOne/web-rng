import { h, render } from "preact";

import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("app");
  if (window.crypto) {
    while (target.hasChildNodes()) {
      target.removeChild(target.lastChild);
    }

    render(<App />, target);
  }
});
