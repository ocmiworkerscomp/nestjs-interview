# NestJS Practical Assessment

The OCMI Workers Comp Practical Developer Assessment aims to test developer fitness in a real-world business use case using NestJS and Next.js. This test is intended for mid-level developers.

## Helpful Links

You can find documentation and other helpful information in the following places:

- [Nx Monorepo README](https://www.notion.so/ocmi/docs/nx-monorepo.md)
- [NestJS Docs](https://docs.nestjs.com/)
- [Prisma ORM Docs](https://www.prisma.io/docs/)
- [Next.js Docs](https://nextjs.org/docs)

## Getting started

Keep in mind, this is a [Nx Monorepo](https://nx.dev/getting-started/intro), so the project structure may look very different from usual.

1. Install all dependencies:

    ```bash
    yarn install
    ```

2. Install Nx CLI

    ```bash
    npm add --global nx@latest
    ```

3. Ensure all your `apps` have a `.env` file in their root directory. You can copy the `.env.example` file and rename it to `.env`:

    ```bash
    cp apps/api/.env.example apps/api/.env
    cp apps/frontend/.env.example apps/frontend/.env
    
    # Expand this as needed for other apps.
    
    # This goes without saying, but make sure you edit the
    # `.env` files to match your local environment.
    
    ```

4. Run the API and frontend development servers:

    ```bash
    nx serve frontend
    nx serve api
    ```


## The App

This repository contains a base nx monorepo, with both backend(NestJS) & frontend(Next.js) apps.

The Swagger documentation has been set up at http://localhost:3000/api.

You will build a **timesheet** application that supports **authentication, route protection, authorization,** **employees' CRUD** and timesheet management. Also, there are two types of user roles, `admin` & `user`.

Using more advanced technologies is an added plus, but you **must** use NestJS and React/Next.js, as well as all their included libraries, for building your app.

## Requirements

- [ ]  Two types of user roles: `admin` & `user`
- [ ]  Usage of OpenAPI (Swagger) for API documentation.
- [ ]  Code quality:
  - [ ]  **MUST** utilize TypeScript throughout the entire codebase, including both backend (NestJS) and frontend (React/Next.js).
  - [ ]  Utilize testing frameworks like **Jest** to write unit tests for backend components, ensuring that individual units of code perform as expected. **Minimum test coverage of 80%.**
- [ ]  Users can perform self-signup through an online form.
- [ ]  Users can log in using existing credentials.
- [ ]  Request validation:
- [ ]  Forms, throughout the site, **MUST** feature validation.
- [ ]  Validation errors **MUST** be displayed in all forms as applicable.
- [ ]  Authenticated users:
  - [ ]  Employees CRUD:
     - [ ]  Can add new employees to the system, providing necessary details like name, position, pay type, pay rate and contact information.
     - [ ]  Should be able to view a list of all employees in the system, including their basic information.
     - [ ]  Can edit the details of their own employees.
     - [ ]  Can remove their own employees.
     - [ ]  When updating or creating an employee, a basic minimum wage validation must be added.
  - [ ]  Timesheet
     - [ ]  Can create timesheets for their employees, capturing details such as date, project, task, and work hours and submit it.
     - [ ]  Should have access to a dedicated page displaying only timesheets for their own employees.
- [ ]  Authenticated admin users:
  - [ ]  Should have access to a dashboard displaying an overview of timesheets, including pending approvals and recently submitted timesheets.
  - [ ]  Can view a comprehensive list of all timesheets submitted by users.
  - [ ]  Have the authority to approve or deny timesheets submitted by users. This action triggers a notification to the respective employee.
- [ ]  Guests/non-authenticated users
  - [ ]  Unauthenticated users will see a “Sign Up” page instead
- [ ]  **Optional (Bonus)**
  - [ ]  Notifications:
     - [ ]  Users receive an email notification when their timesheet is approved by the admin.
     - [ ]  Similarly, users receive an email notification if their timesheet is denied by the admin.
  - [ ]  Timesheet
     - [ ]  User can generate a PDF document with all the timesheet information.

## Constraints

**Assessment Length:** 5 days

**Technologies:**

- TypeScript
- Prisma ORM
- NestJS / Node.js
- Next.js / React
- OpenAPI (Swagger)
- Jest
- Associated packages and libraries:
  - Middleware
  - Hooks
  - State Management
  - Request Validation
  - Guards
  - etc…

**Requirements:** All must be completed

## Recommendations

Using any of the following tools in your project is a big plus:

- **If you do not know how to use any of these, do not try. It will only slow you down and stop you from successfully completing the assessment.**
- Prettier / Keep code well formatted
- React Query
- shadcn / Tailwind
- Zustand

Notes:
- Install Shadcn component: `yarn shadcn <component>`
