import { Session } from 'next-auth'

/** test user*/
export type User = {
  name: string
  image: string
  email: string
  id: string
  role: string
  token: string
}

export type ProfileType = User

export type WithProfileType = {
  profile: ProfileType
}

export type UserType = User & WithProfileType
export type DepartmentType = User
export type ProfessionType = User
export type MunicipalityType = User

export type PatientType = User & WithProfileType

export type NextAuthSessionType = Session & { account: UserType }
