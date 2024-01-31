import create from 'axios'
import { NEXT_PUBLIC_API_URL } from '@/config'
import { useAuthStore } from '@/global-stores/use-auth-store'

export const AXIOS_INSTANCE = create.create({
  baseURL: `${NEXT_PUBLIC_API_URL}/api`,
})

type CustomClient<T> = (data: {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  params?: Record<string, any>
  headers?: Record<string, any>
  data?: BodyType<unknown>
  signal?: AbortSignal
}) => Promise<T>

export const useCustomClient = <T>(): CustomClient<T> => {
  const { user } = useAuthStore()

  const token = user?.token ?? ''

  return async (config) => {
    const request = await AXIOS_INSTANCE.request({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    })

    return request?.data
  }
}

export default useCustomClient

export type ErrorType<ErrorData> = ErrorData

export type BodyType<BodyData> = BodyData & { headers?: any }
