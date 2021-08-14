import React from 'react';
import Logo from './Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuWrapper from './styles/MenuWrapper';
import IconTheme, { ToggleButton } from '../../foundation/Toggle';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];

export default function Menu({
  // eslint-disable-next-line react/prop-types
  theme, setTheme, setModalState, isModalOpen,
}) {
  const themeToggle = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <Text tag="li" variant="smallestException" key={link.url}>
            <a href={link.url}>
              {link.texto}
            </a>
          </Text>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <ToggleButton onClick={themeToggle}>
          <IconTheme theme={theme} />
        </ToggleButton>
        <Button type="button" ghost variant="secondary.main">Entrar</Button>
        <Button
          onClick={() => {
            setModalState(!isModalOpen); // novo state sendo atribuido
          }}
          type="button"
          variant="primary.main"
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
