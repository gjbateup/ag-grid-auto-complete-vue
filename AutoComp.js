import VAutoComplete from "./AutoComplete.vue";
import { createApp,h } from 'vue'



export default function getAutoComplete() {
  function AutoComplete() {}

  AutoComplete.prototype.init = function(params) {
    const app = Vue.createApp({})

    app.mixin({
          data() {
            return {
              gridComponent: AutoComplete.prototype,
              params,
            };
          },
        })


    app.mount('#app').$el

  }

 

  AutoComplete.prototype.getGui = function() {
    return this.el;
  };
  return AutoComplete;
}

