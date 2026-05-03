# Commands (dev)

## Rails
bin/rails server
bin/rails db:migrate
bin/rails db:seed

## Frontend build
npm run build
npm run build:watch

## Dev environment
bin/dev


Activa format on save:

Abre configuración (Ctrl + ,)
Busca: format on save
Activa:


bin/dev
bin/rails server
rails s
npm init -y
bundle add jsbundling-rails
rails javascript:install:esbuild
tree -I "log|tmp|storage|node_modules|vendor/bundle|public/assets|.git"
npm run build
$ ./bin/dev

http://localhost:3000/employees/webix
http://localhost:3000/employees/2


---

rails g controller Home index

import { initWebixEmployees } from "./views/employees/";


if (path.startsWith("/employees/webix")) {
    await initWebixEmployees("webix-container");
    return;
  }