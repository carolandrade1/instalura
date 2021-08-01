import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
    color: ${({ theme, variant }) => get(theme, `colorsLight.${variant}.color`)}; // rever
    background: transparent;
`;

const ButtonDefault = css`
    color: white;
    color: ${({ theme, variant }) => get(theme, `colorsLight.${variant}.contrastText`)}; // rever
    background-color: ${({ theme, variant }) => get(theme, `colorsLight.${variant}.color`)}; // rever
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;

    ${breakpointsMedia({
        xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
        md: css`
      padding: 12px 43px;
      ${TextStyleVariantsMap.paragraph1}
    `,
    })}

    ${propToStyle('margin')}
    ${propToStyle('display')}

    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    &:hover,
    &:focus {
        opacity: .5;
    }
`;