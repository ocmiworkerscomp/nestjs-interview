import axios from 'axios'

const VERCEL_URL = process.env.VERCEL_URL
const PUBLIC_URL = process.env.NEXT_PUBLIC_APP_URL
export const API_URL = process.env.NEXT_PUBLIC_API_URL
const NEXT_AUTH_URL = process.env.NEXTAUTH_URL
export const PRODUCTION_URL = 'https://denty.co'

export const BASE_URL = `${
  PUBLIC_URL ?? NEXT_AUTH_URL ?? VERCEL_URL ?? PRODUCTION_URL
}/api`

export const INTERNAL_API_URI = `http://${BASE_URL.replace(
  /^http(s?):\/\//,
  '',
)}` //  this solve: AxiosError: connect ECONNREFUSED 127.0.0.1:80;

export const fetcher = axios.create({
  baseURL: BASE_URL,
})
