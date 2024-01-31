import * as Yup from 'yup'
import HttpStatusCode from '@/api/lib/http-status-codes'
import { type NextRequest, NextResponse } from 'next/server'
import { UserType } from './models'
import { Session } from 'next-auth'

export type FillableProperties = {
  [key: string]: any
}

export type HandlerType = (req: ApiRequest) => Promise<NextResponse>
export type MethodsType = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type MiddlewareHandlerType = (
  req: ApiRequest,
  params: Record<any, any>,
  next: CallableFunction,
) => Promise<any>

export type MethodHandlerBodyType = {
  handler: HandlerType
  schema?: Yup.AnyObjectSchema
}

export type MethodHandlerType = {
  [key in MethodsType]?: MethodHandlerBodyType
}

export type IResponse = {
  [key in HttpStatusCode]?: string
}

export type ApiRequest<S = unknown> = NextRequest & {
  validated: S extends Record<any, any> ? S : undefined
  auth?: Session & { account: UserType }
}

export type CommonResponse<T = {}> = {
  message: string
  data: T
  status: HttpStatusCode
}

export type TokenType = { user: UserType }

export type AdditionalAuthorizeTypeArgsType = {
  token?: TokenType
  req?: ApiRequest
}

export type AdditionalAuthorizeReturnType = {
  isAuthorized: boolean
  data?: any
  code?: HttpStatusCode
}

export type AdditionalAuthorizeType = ({
  token,
}: AdditionalAuthorizeTypeArgsType) =>
  | Promise<AdditionalAuthorizeReturnType>
  | AdditionalAuthorizeReturnType

export type SendEmailPayload = {
  email: string
  user: UserType
  password?: string
}

export type ExtraEmailPayload = {
  text: string
  template: ({}: any) => string
  isInvitation?: boolean
}

export type EmailTemplateType = SendEmailPayload
