# NestJS Practical Assessment

## Table of Contents

- [OCMI Workers Comp - Stage 3 Practical Assessment](#OCMI-Workers-Comp---Stage-3-Practical-Assessment)
  - [Tool Requirements](#Tool-Requirements)
  - [The Task](#The-Task)
    - [Your application must:](#Your-application-must)
    - [Customers must be able to:](#Customers-must-be-able-to)
    - [Administrators (PEOPayGo employees) must be able to:](#Administrators-PEOPayGo-employees-must-be-able-to)
    - [Minimum Wage](#Minimum-Wage)
    - [Bonus Items](#Bonus-Items)
  - [Helpful Links](#Helpful-Links)
  - [Getting started](#Getting-started)

## OCMI Workers Comp - Stage 3 Practical Assessment

Congratulations! Out of hundreds of talanted candidates, you have been selected to participate in the last stage of our hiring process: The supervised practical assessment.

IMPORTANT! Ensure you learn about [TIMESHEETS]() before beginning this project.

### Tool Requirements

You will be required to use at least the following tools:
NestJS
TypeScript
Jest
ORM of your choice (Prisma is a HUGE plus)

### The Task

You are a software engineer for PEOPayGo, a leading provider in the payroll industry. Customers currently send all hours to PEOPayGo via e-mail, and you wish to modernize that.

To accomplish your goal, you will be building a NestJS / React app where customers can digitally report their payroll, and PEOPayGo administrators are able to see all submissions through an unified interface.

Currently, customers can only report weekly payroll.

#### Your application must:

- [ ] Perform client-side and server-side validation
- [ ] Display validation errors on form fields as applicable
- [ ] Feature proper error handling for expected and unexpected errors
- [ ] Cover at least 50% of all backend code
- [ ] Cover at least 50% of all frontend code
- [ ] Demonstrate knowledge of best practices working with NestJS

#### Customers must be able to:

- [ ] Authenticate using standard e-mail / password authentication
- [ ] Manage (Create/Read/Update/Delete) their employees
- [ ] All employees must feature a name, a pay type, and a pay rate
- [ ] Pay rates must be validated against [Minimum Wage](#Minimum-Wage)
- [ ] Navigate to a Timesheet where customers can submit payroll
- [ ] A table with every employee's information on each row
- [ ] Hourly employees should display an "Hours" input
- [ ] Customers must be able to specify the Check Date of the payroll
- [ ] Gross wages for each employee should be displayed on each row
- [ ] Total gross wages for the whole timesheet should be displayed below
- [ ] View previously submitted timesheets and the status of each timesheet
- [ ] Should only be able to view their own information

#### Administrators (PEOPayGo employees) must be able to:

- [ ] Authenticate using standard e-mail / password authentication
- [ ] View timesheets submitted by all companies
- [ ] Set a status on timesheets submitted by any customer
- [ ] Write notes on timesheets submitted by any customer
- [ ] Create and edit accounts for customers
- [ ] Customers must feature a business name, an e-mail, and a password

#### Minimum Wage

All employees in the state of Florida must be paid the minimum wage. Here is a reference based on the employee's pay type:

| Pay Type | Amount           |
|----------|------------------|
| Hourly   | 12.00 an hour    |
| Salary   | 480.00 per check |

#### Bonus Items

We understand this is a task that is challenging for anybody, but for those especially talented candidates, here are some bonus items that can help you stand out!

Attempt to implement popular design patterns on your application, for example, you could leverage event-driven architecture to dispatch timesheet events instead of injecting services directly.

Support notifications using an event-driven approach. While real notifications cannot be done in CoderPad, we have built a fake "notification bus" that you can use to feature notifications in your app.

The higher the code coverage the better!

Leverage advanced NestJS decorators like OpenAPI / Swagger documentation decorators.

Use Prisma as your ORM of choice.
___

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
    npm i --g nx@latest
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
    yarn api:dev
    yarn frontend:dev
    ```
