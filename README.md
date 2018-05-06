MEANS
=====

Overview
--------

Starter pack

**MongoDB + Express on TypeScript + Angular 6 + Node server + Swagger**

Quick start
-----------

- Run `npm install` in project directory to install all dependencies
- Create configuration `config.json` inside `config/` directory. You can use `congi.json.dist` file as template.
- Run `npm run backend` to run backend Node dev server
- Run `npm run frontend:dashboard` to run Angular dev server with dashboard application
- Run `npm run frontend:client` to run Angular dev server with client application
- Run `npm run build` to build entire app (backend & frontend)

Backend
-------

Backend server is running on nodemon gulp server on `localhost:8080`. You can change port setting in `config.json` file.

Frontend - Dashboard
--------------------

Dashboard application is running on Angular CLI on `localhost:4200`.

Frontend - Client
-----------------

Dashboard application is running on Angular CLI on `localhost:4201`.

Proxy
-----

Frontend apps are using proxy to communicate with backend API.
You can overwite proxy settings (target url) by creating `proxy.config.json.dist` file in root directory.
You can use `proxy.config.json.dist` as template.