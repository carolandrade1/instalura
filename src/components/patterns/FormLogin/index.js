import React from 'react';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';

function LoginForm() {
  return (
    <form id="formCadastro" action="/app/profile">
      <TextField
        placeholder="Usuário"
        name="usuario"
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
}

export default LoginForm;
