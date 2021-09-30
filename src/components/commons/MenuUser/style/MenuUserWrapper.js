import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const Header = styled.header`
  background-color: white;
  padding: 27px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary.light.color}; 
`;

const MenuUserWrapper = styled.nav`
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

MenuUserWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
`;

MenuUserWrapper.RightSide = styled.div`
  display: none;
  justify-content: right;
  align-items: center;

  ${breakpointsMedia({
    md: css`
      display: flex;
      width: 100%;
    `,
  })}

  .inputContainer {
    display: none;
    
    ${breakpointsMedia({
    md: css`
      display: flex;
      align-items: center;
      justify-content: left;
      max-width: 288px;
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
  }

  button {
    width: 32px;
    height: 32px;
    padding: 0;
    background-color: transparent;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 224px;
  }
`;

export { MenuUserWrapper as default };
