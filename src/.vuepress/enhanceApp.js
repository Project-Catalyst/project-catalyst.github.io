import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import mixpanel from "mixpanel-browser"

mixpanel.init("38a8539417c8b5e39e84947167157de6", { "api_host": "https://api-eu.mixpanel.com" }, "")
/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({})
}
