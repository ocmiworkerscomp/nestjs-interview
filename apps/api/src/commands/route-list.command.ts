import { getApp } from '@spikey/api/bootstrap';
import expressListRoutes from 'express-list-routes';
import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'route:list',
  description: 'Get the routes registered in the application',
})
export class RouteListCommand extends CommandRunner {
  async run() {
    const app = await getApp();

    await app.listen(0);

    const server = app.getHttpServer();
    const router = server._events.request._router;

    expressListRoutes(router);

    await app.close();
  }
}
