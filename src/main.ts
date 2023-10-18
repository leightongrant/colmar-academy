import "./style.css";
import homepage from "./components/homepage.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${homepage}
`;
