const { createGqlClient } = require('./src/wikijs/client');
const { pagesListQuery, pageSingleQuery, navigationQuery } = require("./src/wikijs/queries")
const { Wikijs } = require("./src/wikijs/index");
const { config } = require('dotenv');

require("dotenv").config()

async function main() {

    const wikijs = new Wikijs()
    await wikijs.loadPagesList()

    // This needs to go inside the wikijs
    const client = createGqlClient()

    const pages = wikijs.pages

    const nav = await client.request(navigationQuery)
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
            nextLinks: false,
            prevLinks: false,
            repo: '',
            editLinks: false,
            docsDir: '',
            editLinkText: '',
            lastUpdated: false,
        },
        plugins: [
            '@vuepress/plugin-back-to-top',
            '@vuepress/plugin-medium-zoom',
            ['vuepress-plugin-redirect', { 'locales': true }]
        ],
        pages,
        extraWatchFiles: ["wikijs/**/*.js"],
    }


    config.themeConfig['locales'] = themeConfigLocalesFromNavTree(nav.navigation.tree)

    // console.log(JSON.stringify(navTree,null,2))
    // console.log(JSON.stringify(wikijs.pages,null,2))

    // console.log(JSON.stringify(wikijs.nav, null, 2))
    console.log(JSON.stringify(config, null, 2))

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

function themeConfigLocalesFromNavTree(navTree) {
    const themeConfigLocales = {}
    navTree.forEach(leaf => {
        themeConfigLocales[pathForLocale(leaf.locale)] = {
            ...localeDefaults[leaf.locale],
            nav: leaf.items
            .filter( item => !item.target.endsWith('home'))
                .map( item => {
                    if(item.target.endsWith('README')) item.target=`${item.target.replace("/README", "/")}`
                    if(item.target.endsWith('home')) return
                    return {
                    text: item.label,
                    link: item.target
                    }
            })
        }
    })
    return themeConfigLocales
  }

main()
