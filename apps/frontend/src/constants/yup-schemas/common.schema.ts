import Yup from '@/constants/yup-schemas/yup'

export const emailSchema = Yup.string()
  .email('Debe ser un correo valido')
  .required('El email es requerido')
export const passwordSchema = Yup.string().required('password is required')

export const newPasswordSchema = (ref: string) =>
  Yup.object().shape({
    password: Yup.string().required('Contraseña es requerida'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref(ref), 'password'], 'Deben coincidir')
      .required('La contraseña de confirmación es requerida'),
  })
