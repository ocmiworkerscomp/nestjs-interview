import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { HttpException } from '@nestjs/common';


export const success = <T extends Record<any, any>>(
  data: T,
  statusCode: StatusCodes
) => {
  const status = statusCode ? statusCode : 200;

  return { data, status, message: getReasonPhrase(statusCode) };
};

export const error = (
  statusCode: StatusCodes,
  errors?: Record<string, any> | string,
  throwError = true
) => {
  const status = statusCode ? statusCode : 500;
  const response = {
    message: getReasonPhrase(statusCode),
    status,
    errors: typeof errors === 'string' ? { message: errors } : errors
  };

  if (throwError) {
    throw new HttpException(
      response,
      statusCode
    );
  }

  return response;
};
