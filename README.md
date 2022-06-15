# Your API

I denne opgave skal du lave dit eget API med Express og MongoDB.

## Beskrivelse

Du skal oprette et API, der har til opgave at servicere en webshop.

Du vælger selv hvilken slags webshop (fx Ostebiks, Elektronik, Computerspil, Havemøbler, osv.) - Alternativt kan du lave et API til en Blog (brugere, opslag/historier).

APIet skal stille en række ressurser til rådighed, herunder

- Products (de enkelte produkter i forretningen)
- Users (fx kunder, eller administratorere)
- Orders (Når en kunde oprette en bestilling, skal den gemmes som en ordre)

Du skal ***IKKE*** lave selve webshoppen, kun APIet.

## Krav

Du skal lave din opgave i dette repository.

APIet skal laves med Express og MongoDB.

APIet skal dokumenteres med Insomnia og `insomnia-documenter`.

APIet skal offentliggøres på Heroku.

Du skal bruge GitHub.

Foreslag til ressurse-endpoints:

```
GET    /api/v1/products
POST   /api/v1/products
GET    /api/v1/products/:id
PATCH  /api/v1/products/:id
DELETE /api/v1/products/:id

GET    /api/v1/users
POST   /api/v1/users
GET    /api/v1/users/:id
PATCH  /api/v1/users/:id
DELETE /api/v1/users/:id

GET    /api/v1/orders
GET    /api/v1/orders/:id

POST   /api/v1/users/:id/orders

... og andre du selv finder på, men som giver mening til dit API
```

## Hvis du vil gøre APIet lidt mere avanceret

Du skal benytte dig at Access-tokens, så forskellige ressurser bliver beskyttet efter behov.

Du skal sikre dig at APIet er et `Level 3 REST API`.

## Hvis du bliver færdig med opgaven før tid

Lav et administrator-panel i React (eller lign.), hvor en virksomhedsejer kan logge ind og redigere i sine produkter (tilføj, hent, rediger, slet - CRUD).

Et foreslag til hvordan sådan et panel kan se ud, kan du finde her: https://github.com/rts-cmk/admin-panel

## Hjælp

Du kan finde hjælp på følgende ressurser:

- https://mongoosejs.com/docs/index.html
- http://expressjs.com/
- https://github.com/BrianEmilius/brians-osteapi

## Pakker

- express
- mongoose
- body-parser
- bcryptjs
- nodemon
- dotenv
- insomnia-documenter
