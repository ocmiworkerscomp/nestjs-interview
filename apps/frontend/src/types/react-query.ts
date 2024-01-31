import { wrap } from '@/api/wrap'
import { UseInfiniteQueryOptions, UseQueryOptions } from '@tanstack/react-query'

export type WrapperType = ReturnType<typeof wrap>

export type Keys = keyof WrapperType
export type MutableKeys = Exclude<Keys, `get${string}`>
export type GetterKeys = Extract<Keys, `get${string}` | `fbGet${string}`>

export type BaseParams<T extends object> = T

export type ParamsType<K extends Keys> = Parameters<WrapperType[K]>
export type ParamsObject<K extends Keys> = TupleToObject<ParamsType<K>>
export type LastParamType<K extends Keys> = Last<ParamsType<K>>

export type Await<T> = T extends Promise<infer U> ? U : T

export type PaginatedKey<K extends Keys> = readonly [
  K,
  ...(string | number | boolean | object | unknown)[],
]

export type QueryType<T extends Keys> = Await<ReturnType<WrapperType[T]>>

export type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]?: K
}

type Last<T extends any[]> = T extends [...infer I, infer L] ? L : never

export type UseTypeSafeQueryOptions<
  TQueryKey extends GetterKeys,
  TQueryFnData = unknown,
  TError = unknown,
  TData = QueryType<TQueryKey>,
> = {
  queryKey: PaginatedKey<TQueryKey>
  queryParams?: ParamsType<TQueryKey>[0] | object
} & Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey' | 'queryFn'>

//  TQueryFnData = unknown,
//   TError = unknown,
//   TData = TQueryFnData,
//   TQueryData = TQueryFnData,
//   TQueryKey extends QueryKey = QueryKey,

export type UseTypeSafeInfiniteQueryOptions<
  TQueryKey extends GetterKeys,
  TQueryFnData = unknown,
  TError = unknown,
  TData = QueryType<TQueryKey>,
  TQueryData = TQueryFnData,
> = {
  queryKey: PaginatedKey<TQueryKey>
  queryParams?: ParamsType<TQueryKey>[0] | object
} & Omit<UseInfiniteQueryOptions<TData>, 'queryKey' | 'queryFn'>
