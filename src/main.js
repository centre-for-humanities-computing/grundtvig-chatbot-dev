import Vue from 'vue'
import App from './App'
import store from './store'
import _ from 'lodash'
import vuetify from '@/plugins/vuetify';
import VueHotkey from 'v-hotkey'

Vue.config.productionTip = false
Vue.prototype._ = _

Vue.use(VueHotkey)

/* eslint-disable no-new */
new Vue({
  components: { App },
  render: h => h(App),
  icons: {
    iconfont: 'mdi'
  },
  store,
  vuetify
})
  .$mount('#app')
