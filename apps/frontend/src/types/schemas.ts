import yup from 'yup'
import { checkCredentialsSchema } from '@/constants/yup-schemas/users.schema'

export type CheckCredentialsSchemaType = yup.InferType<
  typeof checkCredentialsSchema
>
