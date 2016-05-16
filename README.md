# Welcome to Team Zoltan's [AngularAttack](https://www.angularattack.com) 2016 Repo

Random company website generator

### Resources

* [Faker.js](https://github.com/marak/Faker.js)
* [Bootstrap template](http://startbootstrap.com/template-overviews/agency)
* [Kantian generator](http://www.barbalet.net/kant)
* [Lorem Pixel](http://lorempixel.com/)
* [Random Color](https://github.com/davidmerfield/randomColor)
* [Font Awesome](http://fontawesome.io/?ref=devtoolsonline)
* [Google Fonts](https://www.google.com/fonts)

### Production App

https://zoltan.2016.angularattack.io (Surge flavor)
https://team-zoltan.herokuapp.com (Heroku/Node flavor)

### Local environment setup

* Install [Node / NPM](https://nodejs.org).

* `git clone git@github.com:rumblex/angularattack2016-zoltan.git`

* `cd angularattack2016-zoltan`

* `npm install` to install the NodeJS dependencies, the Angular client side dependencies, and to compile the client side TypeScript. See the "postinstall" script command in /package.json for details.

* `npm start` to start the local Node server on port 3003 (unless overridden by the PORT environment variable). The node server will server the static client files out of /public.

### Surge deployment

The static client files reside within the "public" directory in this repository. The public/CNAME file tells surge where to deploy the files.

* `npm install -g surge`
* `surge public`
