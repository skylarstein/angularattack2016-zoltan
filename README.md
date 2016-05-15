# Welcome to Team Zoltan's [AngularAttack](https://www.angularattack.com) 2016 Repo

Backend: Heroku NodeJS 4.4.4, serving Angular client files from /public

### Production App

https://team-zoltan.herokuapp.com

### Local environment setup

* Install [Node / NPM](https://nodejs.org).

* `git clone git@github.com:rumblex/angularattack2016-zoltan.git`

* `cd angularattack2016-zoltan`

* `npm install` to install the NodeJS dependencies, the Angular client side dependencies, and to compile the client side TypeScript. See the "postinstall" script command in /package.json for details.

* Create a local .env file. This is used to include sensitive credentials that should not be commited into source control. In the case of Heroku deployment these would be defined as config vars.

* `npm start` to start the local Node server
