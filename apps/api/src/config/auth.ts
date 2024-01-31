import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { registerConfig } from '@spikey/api/utils/register-config';

type AuthConfig = {
  jtwSecret: string;
  roundsOfHashing: number;
};

class EnvironmentVariables {
  @IsString()
  JWT_SECRET: string;

  @IsInt()
  @Min(0)
  @Max(65535)
  @IsOptional()
  JWT_ROUND_HASHING: number;
}

export default registerConfig<AuthConfig>({
  name: 'auth',
  config: () => ({
    jtwSecret: process.env.JWT_SECRET,
    roundsOfHashing: parseInt(process.env.JWT_ROUND_HASHING, 10) || 10,
  }),
  envClass: EnvironmentVariables,
});
