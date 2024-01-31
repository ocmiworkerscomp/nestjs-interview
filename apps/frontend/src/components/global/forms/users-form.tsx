'use client'
import {
  Button,
  Card,
  CardContent,
  Form,
  Heading,
  InputField,
  InputGroup,
} from '@lifespikes/ui'
import React, { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import BasicInformationForm from './basic-information-form'
import { useForm } from '@/hooks/use-form'
import {
  userFormSchema,
  UserFormSchemaType,
  userFormsSchemaCreate,
} from '@/constants/yup-schemas/prisma.schema'

export interface UsersFormProps {
  isCreateForm?: boolean
  initialData?: Record<any, any>
}

const UsersForm: FC<UsersFormProps> = ({
  isCreateForm = true,
  initialData,
}) => {
  const form = useForm<UserFormSchemaType>({
    schema: isCreateForm ? userFormsSchemaCreate : userFormSchema,
    defaultValues: {
      name: '',
      address: '',
      birthDate: null,
      password: '',
      confirmPassword: '',
      departmentId: null,
      email: '',
      identification: '',
      image: null,
      municipalityId: null,
      phoneNumber: null,
      ...initialData,
    },
  })

  const onSubmit: SubmitHandler<any> = async (data) => {}

  return (
    <Card>
      <CardContent className="py-8">
        <Form {...form}>
          <div className="space-y-6">
            <BasicInformationForm isEnabledEmailField={isCreateForm} />

            <div className="space-y-4">
              <Heading>Permisos</Heading>
              <InputGroup className="lg:grid-cols-1"></InputGroup>

              <InputGroup className="lg:grid-cols-1 xl:grid-cols-2">
                <InputField name="password" label="Contraseña" />
                <InputField
                  name="confirmPassword"
                  label="Confirmar contraseña"
                />
              </InputGroup>
            </div>

            <div className="flex w-full justify-end">
              <Button onClick={form.handleSubmit(onSubmit, console.log)}>
                {isCreateForm ? 'Crear' : 'Actualizar'}
              </Button>
            </div>
          </div>
        </Form>
      </CardContent>
    </Card>
  )
}

export default UsersForm
