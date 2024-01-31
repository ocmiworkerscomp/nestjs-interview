import {
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';
import { registerConfig } from '@spikey/api/utils/register-config';

type DatabaseConfig = {
  url: string;
  host: string;
  port: number;
  username: string;
  password: string;
  name: string;
};

class EnvironmentVariables {
  @ValidateIf((envValues) => envValues.DB_URL)
  @IsString()
  DB_URL: string;

  @ValidateIf((envValues) => !envValues.DB_URL)
  @IsString()
  DB_CONNECTION: string;

  @ValidateIf((envValues) => !envValues.DB_URL)
  @IsString()
  DB_HOST: string;

  @ValidateIf((envValues) => !envValues.DB_URL)
  @IsInt()
  @Min(0)
  @Max(65535)
  @IsOptional()
  DB_PORT: number;

  @ValidateIf((envValues) => !envValues.DB_URL)
  @IsString()
  @IsOptional()
  DB_PASSWORD: string;

  @ValidateIf((envValues) => !envValues.DB_URL)
  @IsString()
  DB_DATABASE: string;

  @ValidateIf((envValues) => !envValues.DB_URL)
  @IsString()
  DB_USERNAME: string;
}

export default registerConfig<DatabaseConfig>({
  name: 'database',
  config: () => ({
    connection: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    url: process.env.DB_URL,
    name: process.env.DB_DATABASE,
  }),
  envClass: EnvironmentVariables,
});
