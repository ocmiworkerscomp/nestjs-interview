import { registerAs } from '@nestjs/config';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { validateConfig } from '@spikey/api/utils/validate-config';
import { registerConfig } from '@spikey/api/utils/register-config';

type AppConfig = {
  port: number;
  name: string;
  description: string;
};

class EnvironmentVariables {
  @IsInt()
  @Min(0)
  @Max(65535)
  @IsOptional()
  APP_PORT: number;

  @IsString()
  APP_NAME: string;

  @IsString()
  APP_DESCRIPTION: string;
}

export default registerConfig<AppConfig>({
  name: 'app',
  config: () => ({
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    name: process.env.APP_NAME ?? 'Spikey',
    description: process.env.APP_DESCRIPTION ?? 'Awesome API',
  }),
  envClass: EnvironmentVariables,
});
