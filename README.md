# learn-astro
Repositorio para aprender - wait for it - Astro

```bash
  cd astro_db_test
  npm install
  npm start
```

Enlazar Astro db:
```bash
  cd astro_db_test
  npm link
```

Añadir db:
```
  npx astro add db
```
## Push a db
```
  npx astro db push --remote
```

## Seed
Editar `seed.ts` y ejecutar para sincronizar:
```
  npx astro db execute db/seed.ts --remote
```
## Run con remote
```
  npx astro db run --remote
```