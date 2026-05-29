# Development Environment

## Start Dev Environment

```bash
bin/dev
```

---

## Database Console

Opens the PostgreSQL console connected to the development database.

```bash
bin/rails dbconsole
```

Example query:

```bash
SELECT * FROM users;
```

## Cache Fix

```bash
- rails assets:clobber
- rm -rf app/assets/builds/\*
- npm run build
```

## Confirm new Routes

```bash
- rails routes -c employees
```
