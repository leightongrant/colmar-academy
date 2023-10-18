import "./style.css";
import header from "./components/header.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${header}

`;
