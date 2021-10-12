import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import Button from '../../../commons/Button';
import TextField from '../../../forms/TextField';

export const ImagePreviewContainer = styled.div`
  background-color: #d5d5d5;
  width: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 375px;
  height: 100%;
`;

export const ImagePreview = styled.img`
  width: 375px;
  height: 375px;
`;

export const FormContainer = styled.div`
  padding: 24px 24px 24px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TextFieldStyled = styled(TextField)`
  border: 0;
  flex: 1;
  width: 275px;
  border-radius: 15px;
`;

export const ContainerInputButton = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 10px;
  height: 49px;
  border: 1px solid #88989e;
  margin: 0 0 8px;
`;

export const ButtonStyled = styled(Button)`
  width: 48px;
  height: 48px;
  border: none;
  padding: 0;
  outline: 0;
`;

export const ButtonStyledFilter = styled(Button)`
  border: none;
  padding: 0;
  outline: 0;
  background: none;
  display: flex;
  flex-direction: column;
`;

export const Carousel = styled.div`
  overflow-x: scroll;
  display: flex;
  padding: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  ${breakpointsMedia({
    md: css`
      &::-webkit-scrollbar {
        display: initial;
        width: 10px;
        height: 10px;
        background-color: #F5F5F5;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: black;
      }

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #F5F5F5;
      }
    `,
  })}
  
`;
