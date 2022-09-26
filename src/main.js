import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
import "./assets/styles/app.css";

app.use(router);

app.mount("#app");
