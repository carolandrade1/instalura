import React from 'react';
import PropTypes from 'prop-types';
import ContainerHeader, {
  ContainerLogo, ContainerNavbar, InputContainer, Navbar, Header,
} from './style/MenuUserWrapper';
import Logo from '../../../theme/Logo';
import Button from '../Button';

export default function MenuUser({ onPostClick }) {
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
            <div className="postdiv">
              <Button
                className="postbutton"
                onClick={onPostClick}
                type="button"
              >
                <img className="post" src="/images/postIcon.svg" alt="Icone para post" />
              </Button>
            </div>
            <div className="search">
              <Button>
                <img src="/images/search.svg" alt="Icone para busca" />
              </Button>
            </div>
            <div>
              <Button href="/app/feed">
                <img src="/images/home.svg" alt="Home" />
              </Button>
            </div>
            <div>
              <Button>
                <img src="/images/heart.svg" alt="Like" />
              </Button>
            </div>
            <div>
              <Button href="/app/profile">
                <img src="https://github.com/carolandrade1.png" alt="Foto perfil" />
              </Button>
            </div>
          </Navbar>
        </ContainerNavbar>
      </Header>
    </ContainerHeader>
  );
}

MenuUser.propTypes = {
  onPostClick: PropTypes.func.isRequired,
};
