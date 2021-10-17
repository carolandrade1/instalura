/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { loginService } from '../../../services/login/loginService';
import ContainerHeader, {
  ContainerLogo, ContainerNavbar, InputContainer, Navbar, Header,
} from './style/MenuUserWrapper';
import Logo from '../../../theme/Logo';
import Button from '../Button';
import LogoutIcon from '../utils/LogoutIcon';

export default function MenuUser({ onPostClick, contextValues }) {
  const handleLogout = async () => {
    await loginService.logout(null);
  };

  return (
    <ContainerHeader>
      <Header>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <ContainerNavbar>
          <InputContainer>
            <img src="/images/search.svg" alt="Icone para busca" />
            <input
              placeholder="Pesquisar"
            />
          </InputContainer>
          <Navbar>
            <li className="postdiv">
              <Button
                className="postbutton"
                onClick={onPostClick}
                type="button"
              >
                <img className="post" src="/images/postIcon.svg" alt="Icone para post" />
              </Button>
            </li>
            <li className="search">
              <Button>
                <img src="/images/search.svg" alt="Icone para busca" />
              </Button>
            </li>
            <li>
              <Button href="/app/feed">
                <img src="/images/home.svg" alt="Home" />
              </Button>
            </li>
            <li>
              <Button>
                <img src="/images/heart.svg" alt="Like" />
              </Button>
            </li>
            <li>
              <Button href="/app/profile">
                <img src={contextValues.infoGithub.avatar} alt="Foto perfil" />
              </Button>
              <div className="logoutContainer">
                <Button
                  className="logout"
                  href="/"
                  onClick={handleLogout}
                >
                  Logout
                  <LogoutIcon />
                </Button>
              </div>
            </li>
          </Navbar>
        </ContainerNavbar>
      </Header>
    </ContainerHeader>
  );
}

MenuUser.propTypes = {
  onPostClick: PropTypes.func.isRequired,
};
