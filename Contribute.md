/* CONTRIBUTE */

This is the contribute.md of our project. Great to have you here. Here are a few ways you can help make this project better!

# Contribute

## Team members

This section introduces the core team members. 

## Our Bounty System

### Types of bounty 

#### Smaller simple ones are first come basis.

#### There is a bounty bonus that if the reviewer doesn't have to do much in the review then it can go to the bounty Hunter

#### Time Limits
We may impliment a time limit on some bounties so if someone doesn't impliment in the the bounty gets passed back in

#### Bigger bounties 

Bigger bounties will have an element of completion with application
And we will have some sort of selection process
Prob the steering team choosing at first then implement a more inclusive process when and if needed


## How to start contributing to the Community Landing Page

### You will need:

* node & npm - [Installation Guide covering most platforms](https://nodejs.org/en/download/package-manager/)
* markdown editor - Suggestions are welcome. I am using [VSCode](https://code.visualstudio.com/)
* git - Easiest client to use is [Github Desktop](https://desktop.github.com/)
* Basic knowledge of Markdown [Guide](https://www.markdownguide.org/basic-syntax/)

### How to start:

* Install node
* Create a github account and install [GitHub Desktop](https://desktop.github.com/)
* Download site code. Go to [repository](https://github.com/Project-Catalyst/catalyst) and *Download with GitHub Desktop*
![Download with GitHub Desktop](readme.assets/open-in-github.png)
* You can start editing all documents inside the *src* directory right away using your favourite Markdown editor
* If you want to see effects of your work as you go:
  * Go to the *project root directory* in any terminal and run `npm install` to install all the necessary dependencies
  * Run `npm run dev` and go to [http://localhost:8080/](http://localhost:8080/) in your favourite browser to see results of your work immediately

* To build a complete static site run `npm run build`, the result is generated in *static* in the main project directory

### Github Actions

There is a simple node.js action configured in `.github/workflows/node.js.yml` which will build the static site every time new content is pushed to the site.

## Libraries used on this site:
* Vuepress - Content and structure [page](https://vuepress.vuejs.org/)
* Vuetify - components and layout [page](https://vuetifyjs.com/en/)
* js-joda - time travel and other shenanigans [page](https://github.com/js-joda/js-joda)
* vue-marquee-text-component - marquee, due to intergration problems, we are just using the actual component, not the whole the package
<!-- * i18n - Language/localization -->
<!-- * tailwind - CSS design (to be implemented) -->


