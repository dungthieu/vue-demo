import { createApp } from "vue";
import App from "./App";
import "./assets/css/index.css";
import router from './router'
createApp(App).use(router).mount("#app");
