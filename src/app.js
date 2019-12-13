import Vue from 'vue'
import App from './App.vue'
import router from './router'

const APP_RENDER_ID = "app";
import Buefy from 'buefy'

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.prototype.$isEmpty = (data) => {
  if (!data) {
    return true;
  }
  if (data.constructor === Object) {
    return Object.keys(data).length === 0;
  } else if (data.constructor === Array) {
    return data && data.length === 0;
  }
};

let Autopilot = new function () {
  this.render = function () {
    const mountElement = this.getMountElement();
    new Vue({
      router,
      render: h =>
        h(App)
    }).$mount(mountElement);
  };

  this.getMountElement = function () {
    let containerElement = document.getElementById(APP_RENDER_ID);
    if (!containerElement) {
      containerElement = document.createElement('div');
      containerElement.id = APP_RENDER_ID;
      document.body.appendChild(containerElement);
    }
    return containerElement;
  }
};
window.Autopilot = Autopilot;
document.addEventListener('DOMContentLoaded', () => {
  Autopilot.render();
});
