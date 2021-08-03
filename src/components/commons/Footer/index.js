import React from 'react';
import Text from '../../foundation/Text';
import FooterWrapper from './styles/FooterWrapper';

export default function Footer(props) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <FooterWrapper {...props}>
            <a href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.alura.com.br/assets/img/alura-logo.svg" width="57.82" height="24" alt="Logo Alura" />
            </a>
            <Text tag="p" variant="paragraph2" color="tertiary.light">
                Orgulhosamente criado por {' '}
                <a href="https://github.com/carolandrade1" target="_blank" rel="noopener noreferrer">
                    <span>Carol Andrade</span>
                </a>
                {' '} durante o {' '}
                <a href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer">
                    <span>Bootcamp Alura JAM Stack</span>
                </a>
            </Text>
        </FooterWrapper>
    );
}
