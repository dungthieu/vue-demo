import { createApp } from "vue";
import App from "./App";
import "./assets/css/index.css";
import router from "./router";
import i18n from "./plugins/i18n.js";
import installElementPlus from "./plugins/element";

createApp(App).use(router).use(installElementPlus).use(i18n).mount("#app");
