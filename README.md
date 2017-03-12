# lamda-reactor

_My Collection of Almost Pure Functional Reactions_

An Attempt to create pure functional Redux Style Application.

### Contains

* Jiffinator
* Xchangeinator

### Architecture

* `actions`
    All the actions emitted by the components

* `components`
    Source of Interactions

    * `clusters`
    Impure Stateful components, contains their own state.
    * `crossgears`
    Higher order components
    * `dynamos`
    Pure Stateless components
    * `app.js`
    Main Application component

* `constants`
Constants used in the project.
* `containers`
Bridge between components and store.
* `reducers`
Pure functions to apply actions to state.
* `store`
Global state of the Application
* `utils`
Pure functions to operate on data, at several points in Application.
* `resources`
Static resources.
* `routes.js`
Main routing of the Application.
* `index.js`
Main mounting of Application.

### APIs

* GIPHY API
* Fixer.io API

[![CATGIFs](http://forthebadge.com/images/badges/contains-cat-gifs.svg)](http://reactor.rajatsharma.rocks/#/gifs)

[![WITHLOVE](http://forthebadge.com/images/badges/built-with-love.svg)](http://reactor.rajatsharma.rocks/)
