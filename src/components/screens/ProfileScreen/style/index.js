import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const Container = styled.section`
  margin-top: 48px;
  padding: 0 16px;

  ${breakpointsMedia({
    md: css`
      margin: 0 auto;
      margin-top: 160px;
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

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: start;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  max-height: 188px;

  p {
    margin: 0;
    padding-bottom: 5px;
  }
`;

export const ImageContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / 3;
  width: 88px;
  height: 88px;
  overflow: hidden;

  ${breakpointsMedia({
    md: css`
      width: 188px;
      height: 188px;
    `,
  })}

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const ListContainer = styled.ul`
  grid-column: 2;
  grid-row: 1 / 3;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 0;

  ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      width: 100%;
      grid-column: 2;
      grid-row: 1 / 2;
      padding-left: 50px;
    `,
  })}

  span {
    font-size: 16px;

    ${breakpointsMedia({
    md: css`
      font-size: 24px;
    `,
  })}
  }

  p {
    font-size: 12px;

    ${breakpointsMedia({
    md: css`
      font-size: 16px;
    `,
  })}
  }
`;

export const User = styled.div`
  grid-column: 1 / 3;
  grid-row: 3;
  width: 100%;
  padding-left: 0;

  ${breakpointsMedia({
    md: css`
      grid-column: 2;
      grid-row: 2 / 3;
      padding-left: 50px;
    `,
  })}
`;

export const FotosContainer = styled.div`
  max-width: 808px;
  margin: 0 auto;
  margin-top: 27px;
  
  ${breakpointsMedia({
    md: css`
      margin-top: 72px;
    `,
  })}

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    padding: 0;

  ${breakpointsMedia({
    md: css`
      gap: 30px;
    `,
  })}
  }

  li {
    height: 112px;

  ${breakpointsMedia({
    md: css`
      height: 250px;
    `,
  })}
  }

  img { 
    width: 100%;
    height: 100%;
  }
`;

export default InfoContainer;
