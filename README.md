- [Español](#spanish)
- [English](#english)

---

# PLEASE READ BEFORE YOU BEGIN
We would like you to keep the following in mind before beginning this assessment:

1. If you do **not** finish this assessment by the due date, please submit whatever work you have done!
2. Unit testing is an absolute must. You will not move on if you do not demonstrate proper testing practices.
3. Take your time and do your best. We need to see what your real work looks like, not just a completed app.
4. Direct any questions to cristian@ocmiwc.com

---

# English

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

Congratulations! Out of hundreds of talented candidates, you have been selected to participate in the last stage of our hiring process: The supervised practical assessment.

IMPORTANT! Ensure you learn about [TIMESHEETS](./docs/timesheet.md) before beginning this project.

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
3. Run the following commands depending on what you want to do:
   ```bash
   # run the API and frontend development servers
   yarn api:dev
   yarn frontend:dev
   
   # build the API and frontend
   yarn api:build
   yarn frontend:build
   
   # run tests
   yarn api:test
   yarn frontend:test
   
   # run tests with coverage
   yarn api:test-cov
   yarn frontend:test-cov
   
   #run e2e tests
   yarn api:e2e
   yarn frontend:e2e
   ```

# Spanish

## Tabla de Contenidos

- [OCMI Workers Comp - Etapa 3 Evaluación Práctica](#OCMI-Workers-Comp---Etapa-3-Evaluación-Práctica)
  - [Requisitos de la herramienta](#Requisitos-de-la-herramienta)
  - [La tarea](#La-tarea)
    - [Su aplicación debe:](#Su-aplicación-debe)
    - [Los clientes deben poder:](#Los-clientes-deben-poder)
    - [Los administradores (empleados de PEOPayGo) deben ser capaces de:](#los-administradores-empleados-de-peopaygo-deben-ser-capaces-de)
    - [Salario mínimo](#Salario-mínimo)
    - [Bonificaciones](#Bonificaciones)
  - [Enlaces útiles](#Enlaces-útiles)
  - [Cómo empezar](#Cómo-empezar)

## OCMI Workers Comp - Etapa 3 Evaluación Práctica

¡Enhorabuena! De entre cientos de candidatos con talento, has sido seleccionado para participar en la última fase de nuestro proceso de contratación: La evaluación práctica supervisada.

¡IMPORTANTE! Asegúrese de conocer las [Timesheets](./docs/timesheet.md) antes de comenzar este proyecto.

### Requisitos de la herramienta

Deberá utilizar al menos las siguientes herramientas:

- NestJS
- TypeScript
- Jest
- ORM de su elección (Prisma es una GRAN ventaja)

### La tarea

Usted es un ingeniero de software para PEOPayGo, un proveedor líder en la industria de la nómina. Actualmente, los clientes envían todas las horas(timesheets) a PEOPayGo por correo electrónico, y desea modernizar eso.

Para lograr su objetivo, estará construyendo una aplicación NestJS / React donde los clientes pueden informar digitalmente su nómina, y los administradores de PEOPayGo pueden ver todas las presentaciones a través de una interfaz unificada.

Actualmente, los clientes solo pueden informar la nómina semanal.

#### Su aplicación debe:

- [ ] Realizar la validación del lado del cliente y del lado del servidor
- [ ] Mostrar los errores de validación en los campos de formulario según corresponda
- [ ] Gestión adecuada de errores esperados e inesperados
- [ ] Cubrir al menos el 50% de todo el código backend
- [ ] Cubrir al menos el 50% de todo el código frontend
- [ ] Demostrar conocimiento de las mejores prácticas de trabajo con NestJS

#### Los clientes deben poder:

- [ ] Autenticación mediante correo electrónico/contraseña estándar
- [ ] Gestionar (Crear/Leer/Actualizar/Borrar) sus empleados.
- [ ] Todos los empleados deben tener un nombre, un tipo de pago y el monto del pago (sea por hora o salario).
- [ ] Las tarifas salariales deben validarse con base en el [Salario Mínimo](#Salario-Mínimo).
- [ ] Navegar a un timesheet donde los clientes pueden enviar la nómina.
- [ ] Una tabla con la información de cada empleado en cada fila.
- [ ] Los empleados por hora deben mostrar una entrada "Horas".
- [ ] Los clientes deben poder especificar la Fecha de Cheque de la nómina.
- [ ] Los salarios brutos de cada empleado deben mostrarse en cada fila.
- [ ] El salario bruto total del timesheet debe mostrarse en la parte de abajo.
- [ ] Ver los timesheets enviados anteriormente con su respectivo estado.
- [ ] Solo debe poder ver su propia información.

#### Los administradores (empleados de PEOPayGo) deben ser capaces de:

- [ ] Autenticación mediante correo electrónico estándar / autenticación de contraseña
- [ ] Ver los timesheets enviados por todas las empresas.
- [ ] Asignar un estado a cualquier timesheet enviado por los clientes.
- [ ] Redactar una nota en cualquier timesheet enviado por los clientes.
- [ ] Administrar (crear, editar) cuentas de clientes.
- [ ] Los clientes deben tener un nombre de la empresa, un correo electrónico y una contraseña.

#### Salario mínimo

Todos los empleados del estado de Florida deben cobrar el salario mínimo. Aquí hay una referencia basada en el tipo de pago del empleado:

| Tipo de pago | Importe           |
|--------------|-------------------|
| Por hora     | 12,00 la hora     |
| Salario      | 480,00 por cheque |

#### Bonificaciones

Entendemos que esta es una tarea desafiante para cualquiera, pero para aquellos candidatos especialmente talentosos, ¡aquí hay algunos puntos extra que pueden ayudarte a destacar!

Intenta implementar patrones de diseño populares en tu aplicación, por ejemplo, podrías aprovechar la arquitectura dirigida por eventos para enviar eventos de hoja de horas en lugar de inyectar servicios directamente.

Notificaciones de apoyo utilizando un enfoque basado en eventos. Mientras que las notificaciones reales no se pueden hacer en CoderPad, hemos construido un falso "bus de notificación" que puede utilizar para presentar las notificaciones en su aplicación.

Cuanto mayor sea la cobertura del código, ¡mejor!

Aprovecha los decoradores avanzados de NestJS como los decoradores de documentación OpenAPI / Swagger.

Utilice Prisma como su ORM de elección.

___

## Enlaces útiles

Puedes encontrar documentación y otra información útil en los siguientes lugares:

- [Nx Monorepo README](https://www.notion.so/ocmi/docs/nx-monorepo.md)
- [Documentos NestJS](https://docs.nestjs.com/)
- [Prisma ORM Docs](https://www.prisma.io/docs/)
- [Documentación de Next.js](https://nextjs.org/docs)

## Cómo empezar

Ten en cuenta que esto es un Nx [Monorepo](https://nx.dev/getting-started/intro), por lo que la estructura del proyecto puede parecer muy diferente de lo habitual.

1. Instala todas las dependencias:

   ```bash
   yarn install
   ```

2. Instalar Nx CLI

   ```bash
   npm i --g nx@latest
   ```

3. Ejecuta los siguientes comandos dependiendo de lo que quieras hacer:

   ```bash
   # run the API and frontend development servers
   yarn api:dev
   yarn frontend:dev
   
   # build the API and frontend
   yarn api:build
   yarn frontend:build
   
   # run tests
   yarn api:test
   yarn frontend:test
   
   # run tests with coverage
   yarn api:test-cov
   yarn frontend:test-cov
   
   #run e2e tests
   yarn api:e2e
   yarn frontend:e2e
   ```
