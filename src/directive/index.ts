import type { App } from "vue";
import focus from "./focus";
import lazy from "./lazy";

const directivesList: any = {
  focus,
  lazy
};
const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });
  }
};

export default directives;
