# Projecto Catalyst *[En construcción]*
[![GitHub open errores](https://img.shields.io/github/issues/Project-Catalyst/project-catalyst.github.io?style=flat-square)](https://github.com/Project-Catalyst/project-catalyst.github.io/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/Project-Catalyst/project-catalyst.github.io?style=flat-square)](https://github.com/Project-Catalyst/project-catalyst.github.io/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Project-Catalyst/project-catalyst.github.io)](https://github.com/Project-Catalyst/project-catalyst.github.io/pulls)
[![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/Project-Catalyst/project-catalyst.github.io)](https://github.com/Project-Catalyst/project-catalyst.github.io/pulls?q=is%3Apr+is%3Aclosed)
[![GitHub milestones](https://img.shields.io/github/milestones/open/Project-Catalyst/project-catalyst.github.io?style=flat-square)](https://github.com/Project-Catalyst/project-catalyst.github.io)

This information is also available in [English](./README.md)

# Sitio de la Comunidad de Cardano Catalyst en español
https://cardanocataly.st/es/

Ubicación principal para administrar y mejorar Project Catalyst.

## Languages
- [English](https://cardanocataly.st/)
- [Español](https://cardanocataly.st/es/)

# Nuestro sistema de recompensas
Para mas detalles vea nuestra [Política de contribución](./Contribute.md).

# Configuración técnica

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
