import { Command, CommandRunner } from 'nest-commander';
import { UsersService } from '@spikey/api/app/users/users.service';
import { Prisma, Role } from '@prisma/client';
import { HashService } from '@spikey/api/app/auth/hash.service';

const userData: Omit<Prisma.UserCreateInput, 'password'>[] = [
  {
    name: 'Santiago Guerrero',
    email: 'test@test.com'
  },

  {
    name: 'Santiago 258',
    email: 'santigp258@gmail.com'
  }
];

@Command({
  name: 'prisma:seed',
  description: 'Generate seeders'
})
export class PrismaSeedCommand extends CommandRunner {
  constructor(private hasService: HashService, private userService: UsersService) {
    super();
  }

  async run() {
    for (const { name, email, phone } of userData) {
      const user = await this.userService.create({
        name,
        email,
        phone,
        isVerified: true,
        password: 'secret',
        role: Role.SUPER_USER
      });

      console.log(`Created user with id: ${user.id}`);
    }

    console.log(`Seeding finished.`);
  }
}
