import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const ContainerHeader = styled.header`
  display: block;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 48px; 
  padding-top: 10px;
  padding-bottom: 12px;
  border-bottom: none;
  background-color: ${({ theme }) => theme.colors.background.main.color};

  ${breakpointsMedia({
    md: css`
      height: 97px; 
      padding: 0 16px;
      padding-top: 27px;
      padding-bottom: 25px;
      background-color: ${({ theme }) => theme.colors.background.light.color};
      border-bottom: 1px solid #D4D4D4;
    `,
  })}
`;

export const Header = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

    ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      margin: 0 auto;
      max-width: 768px;
        `,
    lg: css`
      max-width: 1160px; 
        `,
    xl: css`
      max-width: 1222px;
        `,
  })}
`;

export const ContainerLogo = styled.div`
  margin: 0;
  padding: 0;
`;

export const ContainerNavbar = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 12px 26px;
  background-color: white;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  ${breakpointsMedia({
    md: css`
      display: flex;
      justify-content: right;
      position: initial;
      width: 100%;
      padding: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `,
  })}
`;

export const InputContainer = styled.div`
  display: none;
    
    ${breakpointsMedia({
    md: css`
      display: flex;
      align-items: center;
      justify-content: left;
      width: 288px;
      max-height: 44px;
      border: 1px solid;
      border-radius: 12px;
      border-color: ${({ theme }) => theme.colors.tertiary.light.color};
      padding: 9px 20px;
      margin-right: 54px;
      `,
  })}

    input {
      display: none;
      background-color: transparent;
      border: none;
      padding-left: 15px;

    ${breakpointsMedia({
    md: css`
      display: initial;
    `,
  })}
    }
`;

export const Navbar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${breakpointsMedia({
    md: css`
      width: 224px;
    `,
  })}

  button, a, li {
    width: 24px;
    height: 24px;
    padding: 0;
    background-color: transparent;

    ${breakpointsMedia({
    md: css`
      width: 32px;
      height: 32px;
    `,
  })}
  }

  img {
    width: 24px;
    height: 24px;

  ${breakpointsMedia({
    md: css`
      width: 32px;
      height: 32px;
    `,
  })}
  }

  .search {
    display: inicial;

    ${breakpointsMedia({
    md: css`
      display: none;
    `,
  })}
    img {
      filter: brightness(0%);
    } 
  }

  .postbutton {
    width: 40px;
    height: 40px;

    .post {
      width: 40px;
      height: 40px;

      ${breakpointsMedia({
    md: css`
      width: 32px;
      height: 32px;
    `,
  })}
    }

    ${breakpointsMedia({
    md: css`
    order: 0;
    width: 32px;
    height: 32px;
  `,
  })}
  }

  button:not(:first-child) {
    width: 24px;
    height: 24px;

    ${breakpointsMedia({
    md: css`
      width: 32px;
      height: 32px;
    `,
  })}
  }

  .postdiv {
    width: 40px;
    height: 40px;

    ${breakpointsMedia({
    md: css`
      width: 32px;
      height: 32px;
    `,
  })}
  }

  li:nth-child(1n) {
    order: 3;

    ${breakpointsMedia({
    md: css`
      order: 0;
    `,
  })}
  }
  li:nth-child(2n) {
    order: 2;
  }
  li:nth-child(3n) {
    order: 1;
  }
  li:nth-child(4n) {
    order: 4;
  }
  li:nth-child(5n) {
    order: 5;
    border-radius: 50%;
    position: relative;

    img {
      border-radius: 50%;
    }

    &:hover .logoutContainer {
      display: initial;
      position: absolute;
      top: -70%;
      right: 15%;
      transform: translate(15%, -70%);

      ${breakpointsMedia({
    md: css`
      top: 50%;
      transform: translateY(50%);
    `,
  })}
    }
  }

  .logoutContainer {
    display: none;
    background-color: #D3D3D3;
    padding: 5px 8px;
    text-align: left;
    border-radius: 5px;

    .logout {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 85px;
    }
  }

`;

export default ContainerHeader;
