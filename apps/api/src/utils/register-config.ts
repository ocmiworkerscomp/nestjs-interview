import { registerAs } from '@nestjs/config';
import { ClassConstructor } from 'class-transformer';
import { validateConfig } from '@spikey/api/utils/validate-config';
import { ConfigObject } from '@nestjs/config/dist/types';
import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { ConfigFactoryKeyHost } from '@nestjs/config/dist/utils/register-as.util';

export function registerConfig<
  TConfig extends ConfigObject,
  TEnv extends object = object,
  TFactory extends ConfigFactory = ConfigFactory<TConfig>,
>({
  name,
  config,
  envClass,
}: {
  name: string;
  config: TFactory;
  envClass: ClassConstructor<TEnv>;
}): TFactory & ConfigFactoryKeyHost<ReturnType<TFactory>> {
  validateConfig(process.env, envClass);

  return registerAs(name, config);
}
