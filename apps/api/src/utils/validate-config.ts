import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

export function validateConfig<T extends object>(
  config: Record<string, unknown>,
  envClass: ClassConstructor<T>,
) {
  const validate = plainToClass(envClass, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validate, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validate;
}
