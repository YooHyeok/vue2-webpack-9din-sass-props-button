// import Vue from "vue";
import { createApp } from "vue";
import App from "./App";
import router from "./routes/index";
import './assets/styles/main.scss'

createApp(App)
.use(router)
.mount("#app");
