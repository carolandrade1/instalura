import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 48px;
  padding: 0 16px;

  ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      padding: 0;
      margin-top: 97px;
      max-width: 788px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

export const PostsContainer = styled.section`
  padding-top: 0;

  ${breakpointsMedia({
    md: css`
      padding-top: 24px;
    `,
  })}

  li {
    width: 100%;
    height: 490px;
    background-color: ${({ theme }) => theme.colors.background.light.color};
    margin-bottom: 25px;

    ${breakpointsMedia({
    md: css`
      max-width: 600px;
      height: 778px;
    `,
  })}
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px 16px 28px;

  ${breakpointsMedia({
    md: css`
      padding: 25px 38px 25px 44px;
    `,
  })}  

  .info {
    display: flex;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 14px;
      padding-left: 12px;

    ${breakpointsMedia({
    md: css`
        font-size: 24px;
        padding-left: 19px;
      `,
  })}    
    }
  }

  .profilePhoto {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    ${breakpointsMedia({
    md: css`
      width: 51px;
      height: 51px;
    `,
  })}  

    img {
      border-radius: 50%;
    }
  }

  img {
    width: 100%;
  }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 320px;

  ${breakpointsMedia({
    md: css`
      height: 510px;
    `,
  })}

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px 16px 28px;

  ${breakpointsMedia({
    md: css`
      padding: 24px 38px 24px 44px;
    `,
  })} 

  .icons {
    display: flex;
    align-items: center;
  }

  .iconsBox {
    display: flex;
    align-items: center;
    padding-right: 19px;

    ${breakpointsMedia({
    md: css`
      padding-right: 30px;
    `,
  })} 

    p {
      padding-left: 9px;
      font-weight: 500;
      font-size: 14px;

    ${breakpointsMedia({
    md: css`
      font-size: 22px;
      padding-left: 15px;
    `,
  })} 
    }
  }

  img {
    width: 24px;
    height: 24px;

    ${breakpointsMedia({
    md: css`
      width: 35px;
      height: 35px;
    `,
  })} 
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px 24px 28px;

  ${breakpointsMedia({
    md: css`
      padding: 0 42px 37px 44px;
    `,
  })}

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 59px;
    height: 25px;

    ${breakpointsMedia({
    md: css`
      width: 90px;
      height: 38px;
    `,
  })}
  }

  p {
    padding-left: 8px;
  }

  span {
    padding: 3px 12px;
    background-color: #F1F1F1;
    border-radius: 8px;
    font-size: 14px;

    ${breakpointsMedia({
    md: css`
      padding: 8px 24px;
      border-radius: 12px;
      font-size: 18px;
    `,
  })}
  }
`;

export const ProjetosContainer = styled.section`
  display: none;
  
  ${breakpointsMedia({
    md: css`
      display: initial;
      width: 400px;
      margin-top: 24px;
      padding: 0 10px;
    `,
  })}

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 18px; 
  }

  img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;

    p {
      padding-left: 8px;
      color: #FB7B6B;
      font-weight: 500;
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 0;
    }
  }

  .login, .title {
    font-weight: 500;
  }

  .title {
    font-size: 18px;
    padding: 25px 0 18px 0;
  }
`;

export default Container;
