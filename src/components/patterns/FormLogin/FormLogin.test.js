import React from 'react';
import user from '@testing-library/user-event';
import FormLogin from './index';
import { render, act, screen, waitFor } from '../../../infra/test/testUtils';

describe('<FormLogin />', () => {
  describe('when from fields are valid', () => {
    test('complete the submission', async () => {
      const onSubmit = jest.fn();

      await act(async () => render(
        <FormLogin
          onSubmit={onSubmit}
        />,
      ));

      expect(screen.getByRole('button')).toBeDisabled();

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      user.type(inputUsuario, 'someusername');
      await waitFor(() => expect(inputUsuario).toHaveValue('someusername'));

      const inputSenha = screen.getByPlaceholderText('Senha');
      user.type(inputSenha, 'somepass');
      await waitFor(() => expect(inputSenha).toHaveValue('somepass'));

      expect(screen.getByRole('button')).not.toBeDisabled();

      user.click(screen.getByRole('button'));

      screen.debug();

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
