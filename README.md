# Lifespikes template

Starter made for all projects related to Lifespikes

## Helpful Links

You can find documentation and other helpful information in the following places:

- [Nx Monorepo README](./docs/nx-monorepo.md)
- [NestJS Docs](https://docs.nestjs.com/)
- [Prisma ORM Docs](https://www.prisma.io/docs/)

## Pre-requisites

- Some Unix-based OS or development environment (_MacOS, Linux, WSL2_)
- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nx](https://nx.dev/)
- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/)

Some of the above are dependencies that will install locally in your project, but installing them globally
will help you leverage their CLI tools without having to prefix them with `yarn` or `npm run`.

We also strongly recommend using [WebStorm](https://www.jetbrains.com/webstorm/) as your IDE.

## Getting Started

1. Install all dependencies:

   ```shell
   yarn install
   ```

2. Ensure all your `apps` have a `.env` file in their root directory. You can copy the `.env.example` file and rename it to `.env`:

   ```shell
   cp apps/api/.env.example apps/api/.env
   cp apps/frontend/.env.example apps/frontend/.env

   # Expand this as needed for other apps.

   # This goes without saying, but make sure you edit the
   # `.env` files to match your local environment.
   ```

3. Run the API and frontend development servers:
   ```shell
   nx serve frontend
   nx serve api
   ```

## Features:

- Basic authentication configuration
- Configuration of environment variable handling
- Commands configuration
- Swagger integration
- Orval integration
- General NX configuration

# Run Command

At the moment, the possible way for commands to be run is as follows:

- You must build the api with the command `nx build api`.
- Run `node spikey <command-name>`.

But if you want to run your command directly you can run,`yarn api:command <command-name>`

To read more information, please read the [nestjs-commander documentation](https://docs.nestjs.com/recipes/nest-commander).


## Notes:

If you want to add more features, components or utilities to the Lifespikes ui, you can make a PR to this repo: [lifespikes/packages](https://github.com/lifespikes/packages)
