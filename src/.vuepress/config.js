const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cardano Catalyst Community Site',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#001D9D' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { 'type':'text/javascript',content:'window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};'+
        'var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";'+
        'var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);,'+
        'for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},'+
        'p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],'+
        'o=0;o<p.length;o++)heap[p[o]]=n(p[o])}; heap.load("4064924217");'}]
  ],
  dest: 'html',

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Cardano Catalyst Community Site',
      description: description
    },
    '/es/': {
      lang: 'es-es',
      title: 'Cardano Catalyst Sitio de la Comunidad',
      description: description
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: 'News',
            link: '/news/'
          },
          {
            text: 'Proposers',
            link: '/proposers/'
          },
          {
            text: 'Voters',
            link: '/voters/'
          },
          {
            text: 'Community Advisors',
            link: '/community-advisor/',
          },
          {
            text: 'Funds',
            link: '/funds/'
          },
          {
            text: 'Resources',
            link: '/resources/'
          },
          {
            text: 'FAQ',
            link: '/faq/'
          },
        ],
      },
      '/es/': {
        selectText: 'Langages',
        label: 'Español',
        ariaLabel: 'Lenguages',
        editLinkText: 'Modifica esta página en GitHub ',
        serviceWorker: {
          updatePopup: {
            message: "Nuevo contenido disponible.",
            buttonText: "Refrescar"
          }
        },
        algolia: {},
        nav: [
          {
            text: 'Noticias',
            link: '/es/news/'
          },
          {
            text: 'Proponentes',
            link: '/es/proposers/'
          },
          {
            text: 'Electores',
            link: '/es/voters/'
          },
          {
            text: 'Asesores comunitarios',
            link: '/es/community-advisor/',
          },
          {
            text: 'Fondos',
            link: '/es/funds/'
          },
          {
            text: 'Recursos',
            link: '/es/resources/'
          },
          {
            text: 'FAQ',
            link: '/es/faq/'
          },
        ],
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
