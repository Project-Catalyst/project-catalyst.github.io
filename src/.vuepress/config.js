const { Wikijs } = require("../wikijs")

require("dotenv").config()

const localeDefaults = {
  en: {
      label: "English",
      selectText: 'Languages',
      ariaLabel: 'Languages'
  },
  es: {
      label: "Español",
      selectText: 'Langages',
      ariaLabel: 'Lenguages',
  },
}

module.exports = async function () {
  const wikijs = new Wikijs()
  await wikijs.loadPagesList()
  await wikijs.loadNav()

  const pages = wikijs.pages
  const nav = wikijs.nav

  const locales = {}
  const additionalPages = []

  for (const locale of Object.keys(pages)) {
    const localeKey = locale === "en" ? "/" : `/${locale}/`
    additionalPages.push(
      ...pages[locale].map((page) => {
        const path = locale === "en" ? page.path : `/${locale}${page.path}`
        return { ...page, path }
      })
    )

    // locales[localeKey] = {
    //   ...localeDefaults[locale],
    //   nav: nav[locale],
    //   sidebar: sidebar[locale],
    // }
  }

  const config = {
    title: 'Cardano Catalyst Community Site',
    description: 'A landing page for anyone who wants to know about Project Catalyst. A hub gathering information and linking to other resources in the Cardano ecosystem',

    head: [
      ['meta', { name: 'theme-color', content: '#001D9D' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    dest: 'html',

    locales: localesConfigFromNavTree(nav.navigation.tree),

    themeConfig: {
      repo: "",
      editLinks: false,
      docsDir: "",
      editLinkText: "",
      lastUpdated: false,
      locales,
    },

    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom", ['vuepress-plugin-redirect',{'locales':true}]],

    additionalPages,
    extraWatchFiles: ["wikijs/**/*.js"],
  }
  config.themeConfig['locales'] = themeConfigLocalesFromNavTree(nav.navigation.tree)
  
  return config
}


function localesConfigFromNavTree(navTree) {
  const localesConfig = {}
  navTree.forEach(leaf => {
    localesConfig[pathForLocale(leaf.locale)] = {
      lang: langForLocale(leaf.locale),
      title: titleForLocale(leaf.locale),
      description: descriptionForLocale(leaf.locale)
    }
  })
  return localesConfig
}

function langForLocale(locale) {
  switch (locale) {
    case 'en':
      return 'en-US'
    case 'es':
      return 'es-es'
    default:
      return 'en-US'
  }
}

/**
* A stub method do be developed later, we don't know where we can store translations in wiki, maybe we need an extension
* @param {*} locale 
* @returns a title for locale 
*/
function titleForLocale(locale) {
  return 'Cardano Catalyst Community Site'
}

/**
* A stub method do be developed later, we don't know where we can store translations in wiki, maybe we need an extension
* @param {*} locale 
* @returns 
*/
function descriptionForLocale(locale) {
  return 'A landing page for anyone who wants to know about Project Catalyst. A hub gathering information and linking to other resources in the Cardano ecosystem'
}

function pathForLocale(locale) {
  return locale === 'en' ? '/' : `/${locale}/`
}
function themeConfigLocalesFromNavTree(navTree) {
  const themeConfigLocales = {}
  navTree.forEach(leaf => {
      themeConfigLocales[pathForLocale(leaf.locale)] = {
          ...localeDefaults[leaf.locale],
          nav: leaf.items
              .filter( item => !item.target.endsWith('home'))
              .map( item => {
                if(item.target.endsWith('README')) item.target=`${item.target.replace("/README", "/")}`
                return {
                  text: item.label,
                  link: item.target.replace('/en/','/')
                }
          })
      }
  })
  return themeConfigLocales
}