import { Command, CommandRunner, Option } from 'nest-commander';
import { createSwaggerDocument, getApp } from '@spikey/api/bootstrap';
import * as nodePath from 'node:path';
import * as fs from 'fs-extra';

type CommandOptions = {
  path: string;
};

@Command({
  name: 'generate:open-api-file',
  description: 'Generate the open api schema of the api',
})
export class OpenApiCommand extends CommandRunner {
  async run(passedParam: string[], options: CommandOptions) {
    const app = await getApp();
    const document = createSwaggerDocument(app);
    const json = JSON.stringify(document, null, 4);
    const openApiPath = nodePath.join(process.cwd(), options.path);

    fs.outputFileSync(openApiPath, json);

    console.info(`File created at ${openApiPath}`);
  }

  @Option({
    flags: '-p, --path <path>',
    description: 'Path where the file will be saved',
  })
  setPath(path: string) {
    return path;
  }
}
