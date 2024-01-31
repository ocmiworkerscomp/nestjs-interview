import { yupResolver } from '@hookform/resolvers/yup'
import {
  Path,
  SubmitHandler,
  useForm as useFormHookForm,
  FieldValues,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'

import * as Yup from 'yup'
import { useToast } from '@lifespikes/ui'

/* useForm wrapper for better use of yup schemas  */
export const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext extends object = object,
>({
  schema,
  ...props
}: UseFormProps<TFieldValues, TContext> & {
  schema?: Yup.AnyObjectSchema
}): UseFormReturn<TFieldValues, TContext> => {
  const formMethods = useFormHookForm<TFieldValues, TContext>({
    resolver: schema ? yupResolver(schema) : undefined,
    ...props,
  })

  const { handleSubmit, setError } = formMethods

  const toast = useToast()

  const onValidHandler = async (
    onValid: SubmitHandler<TFieldValues>,
    data: TFieldValues,
  ) => {
    try {
      await onValid(data)
    } catch (err) {
      const e = err as any
      const backendErrors = e?.response?.data?.errors

      if (backendErrors) {
        const errors = Object.entries<Record<string, any>>(backendErrors)
        for (const [key, value] of errors) {
          setError(key as Path<TFieldValues>, {
            type: 'custom',
            message: value?.message as string,
          })
        }

        toast.destructive({
          title: 'Hay algunos errores en el formulario',
          description: 'Por favor, intenta nuevamente',
        })
      }
    }
  }

  return {
    ...formMethods,
    handleSubmit: (onValid, onInvalid) =>
      handleSubmit((data) => onValidHandler(onValid, data), onInvalid),
  }
}
