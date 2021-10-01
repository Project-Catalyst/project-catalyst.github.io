import Vuetify from "vuetify"
import 'vuetify/dist/vuetify.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import axios from 'axios';
import VueAxios from 'vue-axios';
import AsyncComputed  from 'vue-async-computed'
axios.defaults.withCredentials = true;

const vuetifyOpts ={
}

/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

// IMPORTANT: Uncomment before moving to production

// var mixpanel = require('mixpanel-browser');
// mixpanel.init("38a8539417c8b5e39e84947167157de6", { "api_host": "https://api-eu.mixpanel.com" }, "");
// mixpanel.track("Mixpanel initialized");

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
  library.add(fas,fab) // Include needed icons

  Vue.use(Vuetify)
  Vue.use(VueAxios, axios)
  Vue.use(AsyncComputed)
  options.vuetify = new Vuetify(vuetifyOpts)
}