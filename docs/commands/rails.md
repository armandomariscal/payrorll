# Rails Commands

## Database
bin/rails db:migrate
bin/rails db:seed

## Server
bin/rails server
# or
rails s

## Generators
bin/rails generate controller Home index
# or
rails g controller Home index

## JavaScript Setup (esbuild)
bundle add jsbundling-rails
bin/rails javascript:install:esbuild

## API Controllers
```bash
rails generate controller api/employees
```

Generated file:

```bash
app/controllers/api/employees_controller.rb
```

---

## Routes

Lists registered Rails routes and filters specific endpoints.

```bash
rails routes
rails routes | grep api
rails routes | grep users
rails routes | grep employees
```


---

```bash
touch config/initializers/cors.rb
```