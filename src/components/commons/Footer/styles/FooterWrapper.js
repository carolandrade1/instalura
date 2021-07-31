import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    cursor: pointer;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;