import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

Sentry.init({
  dsn: 'https://d8b794e1bd8f4157913c89372fcb5ec3@sentry.io/1801469',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});