# My mountain courses

### Story

I wish, one day, to become a mountain guide. To take the exam you have to fulfill a list of 
several hiking, climbing and skiing courses. [Official list of the 
required courses for 2022](https://www.ensa.sports.gouv.fr/sites/default/files/2021-09/Nouvelle%20liste%20probatoire_juillet_2021_DT_formulaire-avec%20compression_0.pdf).
The goal of this project is to build a web app to show publicly my  mountain courses recorded 
in a [Notion](https://www.notion.so/) database.

### Technos

- [Nx](https://nx.dev/) monorepo 
- Microservices architecture with [Nest](https://docs.nestjs.com/microservices/basics)
- TypeORM + PostgreSQL
- Angular + TailwindCSS

### How does it work ? 

All the courses are recorded in a [Notion](https://www.notion.so/) database.

- **front**: Clean architecture Angular front web app
- **notion-courses-sync** microservice: Retrieves courses from my Notion DB using the [Notion API](https://developers.notion.com/) and populates the DB
- **courses** microservice: Courses CRUD
- **identity-manager**: SSO authentication using [SAMLTest.Id](https://samltest.id/) as identity 
  provider
- **gateway**: A simple microservices gateway 

One PostgreSQL DB instance for all the services (for the moment). 

One nx library **mountain-courses-lib** to gather common class/Module/Service.   

### Getting started

#### Development

Requirements : 
- Node
- Package manager (npm/yarn/pnpm)
- docker + docker compose

_Install node modules_
```
yarn
```

_Start the DB container_
```
docker-compose up
```

_Start the apps_
```
nx run-many --parallel --target=serve
```

#### Production

Coming soon.


#### TODO
- [ ] Fix SSO
- [ ] Code a clean UI 
- [ ] Auto sync using a cron job on notion-courses-sync microservice
- [ ] Improve linting
- [ ] Deploy prod to raspberry pie 
