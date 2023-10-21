import "./style.css";
import layout from "./components/layout.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${layout}
`;
