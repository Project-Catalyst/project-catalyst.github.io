const compact = require("lodash/compact")
const {pagesListQuery, pageSingleQuery, navigationQuery} = require("./queries")
const {createGqlClient} = require("./client")

class Wikijs {
  constructor() {
    this.client = createGqlClient()
    this.pages = []
    this.nav = {}
  }
  async loadPagesList() {
    const pagesListResponse = await this.client.request(pagesListQuery)
    const pagesResponses = await Promise.all(
      pagesListResponse.pages.list
        .filter((page) => page.isPublished)
        .map(({id}) => this.client.request(pageSingleQuery, {id}))
    )
    const pages = pagesResponses.map(({pages: {single}}) => {
      let path = `/${single.path.replace("/README", "")}/`
      let title = single.title
      
      if(path.endsWith('home/')) path = path.replace("home/","")
      
      return {
        ...single,
        title,
        path,
      }
    })
    const pagesByLocale = {}
    pages.forEach((page) => {
      if (!pagesByLocale[page.locale]) {
        pagesByLocale[page.locale] = []
      }
      pagesByLocale[page.locale].push(page)
    })
    this.pages = pagesByLocale
  }
  async loadNav(){
    this.nav = await this.client.request(navigationQuery)
  }

  // get nav() {
  //   const navByLocale = {}
  //   const locales = Object.keys(this.pages)
  //   locales.forEach((locale) => {
  //     const pathPrefix = locale === "en" ? "" : `/${locale}`
  //     navByLocale[locale] = this.pages[locale]
  //       .filter(({path}) => !!path.match(/^\/[^/]+\/$/))
  //       .map((page) => ({
  //         text: page.title,
  //         link: pathPrefix + page.path,
  //       }))
  //   })
  //   return navByLocale
  // }

  get sidebar() {
    const sidebarByLocale = {}
    const locales = Object.keys(this.pages)
    for (const locale of locales) {
      for (const page of this.pages[locale].filter(
        ({path}) => !path.match(/^\/[^/]+\/$/)
      )) {
        const path = page.path
        const levelDir = path.split("/").slice(0, -2).join("/") + "/"
        const levelIndex = this.pages[locale].find(
          ({path}) => path === levelDir
        )
        if (levelIndex) {
          const levelDirLocalized =
            locale === "en" ? levelDir : `/${locale}${levelDir}`
          const pathPrefix = locale === "en" ? "" : `/${locale}`
          if (!sidebarByLocale[locale]) {
            sidebarByLocale[locale] = {}
          }
          if (!sidebarByLocale[locale][levelDirLocalized]) {
            sidebarByLocale[locale][levelDirLocalized] = [
              {
                title: levelIndex.title,
                children: [""],
              },
            ]
          }
          sidebarByLocale[locale][levelDirLocalized][0].children.push(
            pathPrefix + path
          )
        }
      }
    }
    return sidebarByLocale
  }
}

module.exports = {Wikijs}
