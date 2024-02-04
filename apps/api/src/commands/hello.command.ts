import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'hello',
  description: 'Say hello to the world!',
})
export class HelloCommand extends CommandRunner {
  async run() {
    console.log('Hello world!');
  }
}
