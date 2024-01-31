'use client';

import { SubmitHandler } from 'react-hook-form';
import { CheckCredentialsSchemaType } from '@/types/schemas';
import { useForm } from '@/hooks/use-form';
import { checkCredentialsSchema } from '@/constants/yup-schemas/users.schema';
import { signIn } from 'next-auth/react';
import { ChevronRight } from 'lucide-react';
import { Button, Form, InputField } from '@lifespikes/ui';

const LoginForm = () => {
  const form = useForm<CheckCredentialsSchemaType>({
    schema: checkCredentialsSchema,
    defaultValues: { password: '', email: '' }
  });

  const {
    formState: { isSubmitting }
  } = form;


  const handleSubmit: SubmitHandler<CheckCredentialsSchemaType> = async (
    data
  ) => {
    await signIn('credentials', {
      ...data,
      redirect: true,
      callbackUrl: '/'
    });

  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 grid grid-cols-1 gap-y-8"
      >
        <InputField
          label="Correo electronico"
          name="email"
          type="email"
          autoComplete="email"
        />
        <InputField
          label="Contraseña"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <div>
          <Button
            isLoading={isSubmitting}
            className="w-full"
            type="submit"
            rightIcon={<ChevronRight className="h-4 w-4" />}
          >
            Iniciar sesión
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
