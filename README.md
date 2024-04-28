# CarmiArt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## __________ DESPLIEGUES__________ ##

## Para despliegue en netlify | solución de navegación

1: crear un archivo dentro de src llamado: _redirects dentro del archivo pegar: /*  /index.html 200
2: dentro del archivo angular.json agregar en assets  "src/_redirects"

## Para despliegue en git pages

1: npm i angular-cli-ghpages@1
2: ng deploy --base-href=https://armandohuarcaya.github.io/carmi-art/
