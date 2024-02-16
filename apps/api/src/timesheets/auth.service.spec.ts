import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../user/auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserModule } from '../user/user.module'; 

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule], // Asegúrate de importar el módulo necesario
      providers: [AuthService, UserService, JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return user when username and password are correct', async () => {
      const mockUser: User = {
        id: 1,
        username: 'username',
        password: 'password',
        is_admin: false,
      };
      jest.spyOn(userService, 'findByUsername').mockResolvedValueOnce(mockUser);

      const result = await service.validateUser('testuser', 'testpassword');

      expect(result).toEqual(mockUser);
    });

    it('should return null when username or password are incorrect', async () => {
      jest.spyOn(userService, 'findByUsername').mockResolvedValueOnce(null);

      const result = await service.validateUser('testuser', 'testpassword');

      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('should return access token when user is provided', async () => {
      const mockUser = { username: 'testuser', userId: 'testUserId' };
      const mockAccessToken = 'mockAccessToken';
      jest.spyOn(jwtService, 'sign').mockReturnValueOnce(mockAccessToken);

      const result = await service.login(mockUser);

      expect(result.access_token).toEqual(mockAccessToken);
      expect(jwtService.sign).toHaveBeenCalledWith({
        username: 'testuser',
        sub: 'testUserId',
      });
    });
  });
});
