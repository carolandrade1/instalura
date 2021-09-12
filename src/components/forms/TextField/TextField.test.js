import React from 'react';
import { render, screen } from '../../../infra/test/testUtils';

import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Carol"
        onChange={() => {}}
        name="nome"
      />,
    );

    // screen.debug();
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });


  describe('when field is valid', () => {

  });

  describe('when field is invalid', () => {
    // elemento tenha o span de texto
    // muda o CSS da borda
    test('displays the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="carol@gmail.com"
          onChange={() => { }}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />,
      );
      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('carol@gmail.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório');
      expect(inputEmail).toMatchSnapshot();
      // expect(true).toBe(true);
    });
  });
});
