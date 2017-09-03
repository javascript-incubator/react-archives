# Totem
<img src='inspiration.jpg' height='300px' align='right'/>

Boilerplate for creating Arcgis Web Application 🌏 with React-Redux and Webpack (_and without Dojo_),

Primed with 💉 Bleeding Edge Mapping and Frontend Techs, like it uses

- [ESRI's Arcgis API for Javascript v 4.4](https://developers.arcgis.com/javascript/latest/guide/) for Maps(_I know_)
- [Redux](http://redux.js.org/) as Immutable State Container, _obviously_ with React as View Engine
- [Indra](https://github.com/rajatsharma305/indra) as Mutable State Container.
- [Esri Promise](https://www.npmjs.com/package/esri-promise) for loading Dojo Modules, so that we can build our project with Webpack
- [Webpack 2](https://webpack.js.org/) for building Project
- [styled-components](https://www.styled-components.com/) for Styling Components(sass and css are also supported, out of the box)
- [Sass](http://sass-lang.com/) this boilerplate supports sass along with css
- [Eslint](https://eslint.org/) for Linting Javascript, following [Standardjs](https://standardjs.com/) style guide

#### The Example?

[Map of Thrones: Map of Westeros with Cities and Castles](https://rajatsharma305.github.io/totem/).

#### Atom Setup

```bash
apm install linter linter-eslint language-babel autocomplete-modules
```

#### Installation and Development
- Get code, either clone repo or Download

```bash
git clone --depth=1 https://github.com/rajatsharma305/mapofthrones.git your-project-name
```

- cd to the rootdir ie. `cd your-project-name`

- `npm i or yarn install` to install dependencies.
- `npm start or yarn start` to start development server.
- `npm build` to build project.
- `npm deploy` to deploy to `gh-pages`.
