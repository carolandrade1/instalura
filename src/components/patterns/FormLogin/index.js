import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { loginService } from '../../../services/login/loginService';

const loginSchema = yup.object().shape({
  usuario: yup.string().required('"Usuário é obrigatório"').min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup.string().min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

function LoginForm() {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      loginService.login({
        username: values.usuario, // 'omariosouto'
        password: values.senha, // 'senhasegura'
      })
        .then(() => {
          router.push('/app/profile');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form id="formCadastro" action="/app/profile" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        onChange={form.handleChange}
        error={form.errors.usuario}
        onBlur={form.handleBlur}
        isTouched={form.touched.usuario}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        onChange={form.handleChange}
        error={form.errors.senha}
        onBlur={form.handleBlur}
        isTouched={form.touched.senha}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  );
}

export default LoginForm;
