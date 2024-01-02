import "@/assets/styles/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import directive from "@/directive/index";

const app = createApp(App);
// AudioParamMap
// AudioParamMap
// AudioParamMap

app.use(createPinia());
app.use(router);
app.use(directive);

app.mount("#app");
