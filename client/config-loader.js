import config from "./config.json" with { type: "json" };

window.config = config;

const script = document.createElement("script");
script.src = "./arras.io_files/bundle.js";
document.head.appendChild(script);