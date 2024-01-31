import Yup from '@/constants/yup-schemas/yup'
import { emailSchema } from '@/constants/yup-schemas/common.schema'

export const checkCredentialsSchema = Yup.object({}).shape({
  email: emailSchema,
  password: Yup.string().required('La contraseña es requerida'),
})
