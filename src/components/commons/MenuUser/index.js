import React from 'react';
import MenuUserWrapper, { Header } from './style/MenuUserWrapper';
import Logo from '../../../theme/Logo';
import Button from '../Button';
import Link from '../Link';
import Box from '../../foundation/Layout/Box';

export default function MenuUser() {
  return (
    <Header>
      <MenuUserWrapper>
        <MenuUserWrapper.LeftSide>
          <Logo />
        </MenuUserWrapper.LeftSide>
        <MenuUserWrapper.RightSide>
          <Box className="inputContainer">
            <img src="/images/search.svg" alt="Icone para busca" />
            <input
              placeholder="Pesquisar"
            />
          </Box>
          <div className="navbar">
            <Button>
              <img src="/images/postIcon.svg" alt="Icone para post" />
            </Button>
            <Link href="/profile">
              <img src="/images/home.svg" alt="Home" />
            </Link>
            <Button>
              <img src="/images/heart.svg" alt="Icone para post" />
            </Button>
            <Link href="/">
              <img src="/images/heart.svg" alt="Foto perfil" />
            </Link>
          </div>
        </MenuUserWrapper.RightSide>
      </MenuUserWrapper>
    </Header>
  );
}
