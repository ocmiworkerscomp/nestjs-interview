import yup from '@/constants/yup-schemas/yup'

import { InferType } from 'yup'

export const passwordSchema = yup.object().shape({
  password: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'La contraseña debe coincidir'),
})

export const passwordSchemaRequired = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'La contraseña debe coincidir')
    .required(),
})

export const profileSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  image: yup.string().url().nullable(),
  phoneNumber: yup.string().nullable(),
  identification: yup.string().nullable(),
  address: yup.string().nullable(),
  birthDate: yup.date().nullable(),
  //municipalityId: yup.number().nullable(),
  professionId: yup.number().nullable(),
})

const baseUserFormSchema = yup
  .object()
  .shape({
    departmentId: yup.number().nullable(),
    municipalityId: yup
      .number()
      .nullable()
      .when('departmentId', (values, schema, options) => {
        if (values[0] !== null) {
          return schema.required(
            'Campo municipio es requerido cuando el departamento se especifica',
          )
        }
        return schema
      }),
  })
  .concat(profileSchema)
export const userFormSchema = yup
  .object()
  .shape({})
  .concat(baseUserFormSchema)
  .concat(passwordSchema)

export const userFormsSchemaCreate = yup
  .object()
  .shape({})
  .concat(baseUserFormSchema)
  .concat(passwordSchemaRequired)

export type UserFormSchemaType = InferType<typeof userFormSchema>
export type UserFormSchemaCreateType = InferType<typeof userFormsSchemaCreate>
