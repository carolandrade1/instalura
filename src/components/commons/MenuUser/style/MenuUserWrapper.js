import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const ContainerHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  padding-top: 10px;
  padding-bottom: 12px;
  border-bottom: none;
  position: fixed;
  width: 100%; 

  ${breakpointsMedia({
    md: css`
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
      padding: 0 16px;
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

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${breakpointsMedia({
    md: css`
      width: 224px;
    `,
  })}

  button, a, div {
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

  div:nth-child(1n) {
    order: 3;

    ${breakpointsMedia({
    md: css`
      order: 0;
    `,
  })}
  }
  div:nth-child(2n) {
    order: 2;
  }
  div:nth-child(3n) {
    order: 1;
  }
  div:nth-child(4n) {
    order: 4;
  }
  div:nth-child(5n) {
    order: 5;
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  }
`;

export default ContainerHeader;
