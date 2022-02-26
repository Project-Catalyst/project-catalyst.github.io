# Project Catalyst ** Under Construction **
[![GitHub open issues](https://img.shields.io/github/issues/Project-Catalyst/project-catalyst.github.io?style=flat-square)](https://github.com/Project-Catalyst/project-catalyst.github.io/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/Project-Catalyst/project-catalyst.github.io?style=flat-square)](https://github.com/Project-Catalyst/project-catalyst.github.io/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Project-Catalyst/project-catalyst.github.io)](https://github.com/Project-Catalyst/project-catalyst.github.io/pulls)
[![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/Project-Catalyst/project-catalyst.github.io)](https://github.com/Project-Catalyst/project-catalyst.github.io/pulls?q=is%3Apr+is%3Aclosed)
[![GitHub milestones](https://img.shields.io/github/milestones/open/Project-Catalyst/project-catalyst.github.io?style=flat-square)](https://github.com/Project-Catalyst/project-catalyst.github.io)

## English
- [Español](#español)

## Cardano Catalyst Community Site
https://cardanocataly.st/

A central location for managing and improving Project Catalyst.

## Our Bounty System

For more detail see our [Contributions policy](./Contribute.md).

## Technical Set-Up

## vuepress

This site is built using [Vuepress](https://vuepress.vuejs.org/)

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
* vue-marquee-text-component - marquee, due to intergration problems, we are just using the actual component, not the whole the package.

# Projecto Catalyst ** En construcción**
[![GitHub open errores](https://img.shields.io/github/issues/Project-Catalyst/project-catalyst.github.io?style=flat-square)](https://github.com/Project-Catalyst/project-catalyst.github.io/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/Project-Catalyst/project-catalyst.github.io?style=flat-square)](https://github.com/Project-Catalyst/project-catalyst.github.io/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Project-Catalyst/project-catalyst.github.io)](https://github.com/Project-Catalyst/project-catalyst.github.io/pulls)
[![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/Project-Catalyst/project-catalyst.github.io)](https://github.com/Project-Catalyst/project-catalyst.github.io/pulls?q=is%3Apr+is%3Aclosed)
[![GitHub milestones](https://img.shields.io/github/milestones/open/Project-Catalyst/project-catalyst.github.io?style=flat-square)](https://github.com/Project-Catalyst/project-catalyst.github.io)

## Español
- [English](#english)

## Sitio de la comunidad de Cardano Catalyst
https://cardanocataly.st/es/

Ubicación principal para administrar y mejorar Project Catalyst.

## Nuestro sistema de recompensas
Para mas detalles vea nuestra [Política de contribución](./Contribute.md).

## Configuración técnica

## Vuepress

Este sitio se construyo usando [Vuepress](https://vuepress.vuejs.org/)

### Necesitaras lo siguiente:

* node & npm - [Guia de instalacion en la mayoria de plataformas](https://nodejs.org/en/download/package-manager/)
* Editor para markdown - Sus sugerencias son bienvenidas. Estoy usando [VSCode](https://code.visualstudio.com/)
* git - Cliente recomendado [Github Desktop](https://desktop.github.com/)
* Aprendizaje básico de Markdown [Guía](https://www.markdownguide.org/basic-syntax/)

### Como iniciar:

* Instalar node.
* Crea una cuenta en Github e instala [GitHub Desktop](https://desktop.github.com/).
* Descarga el código del sitio. Vaya al [repositorio](https://github.com/Project-Catalyst/catalyst) y *Descargue mediante GitHub Desktop*.
![Descarga mediante GitHub Desktop](readme.assets/open-in-github.png)
* Puede comenzar a editar todos los documentos dentro del directorio * src * de inmediato usando su editor de Markdown favorito.
* Si desea ver el progreso actual de su trabajo:
  * Vaya al *directorio root del proyecto* en cualquier terminal y ejecute `npm install` para instalar todas las dependencias necesarias.
  * Ejecute `npm run dev` y vaya a [http://localhost:8080/](http://localhost:8080/) en su navegador para ver los resultados actuales de su trabajo.

* Para construir un sitio estático completo, ejecute `npm run build`, el resultado se genera en *static* en el directorio principal del proyecto

### Acciones de Github

Hay una acción sencilla de node.js configurada en `.github/workflows/node.js.yml` la cual actualiza automaticamente el sitio cada vez que se realize un cambio.

## Bibliotecas utilizadas en este sitio:
* Vuepress - Contenido y estructura [página](https://vuepress.vuejs.org/)
* Vuetify - Componentes y diseño [página](https://vuetifyjs.com/en/)
* js-joda - Viajes en el tiempo y otras travesuras [página](https://github.com/js-joda/js-joda)
* vue-marquee-text-component - marquee, debido a problemas de integración, solo estamos usando el componente, no todo el paquete.
<!-- * i18n - Language/localization -->
<!-- * tailwind - CSS design (to be implemented) -->
