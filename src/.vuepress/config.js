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
    '/fr/': {
      lang: 'fr-FR',
      title: 'Cardano Catalyst Site Communautaire',
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
      '/fr/': {
        selectText: 'Langages',
        label: 'Français',
        ariaLabel: 'Langages',
        editLinkText: 'Modifier cette page sur GitHub ',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          {
            text: 'Proposants',
            link: '/fr/proposers/'
          },
          {
            text: 'Les électeurs',
            link: '/fr/voters/'
          },
          {
            text: 'Conseillers communautaires',
            link: '/fr/community-advisor/',
          },
          {
            text: 'Fonds',
            link: '/fr/funds/'
          },
          {
            text: 'Ressources',
            link: '/fr/ressources/'
          },
          {
            text: 'FAQ',
            link: '/fr/faq/'
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
