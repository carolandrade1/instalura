import React from 'react';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

const links = [
    {
        texto: 'Home',
        url: '/',
    },
    {
        texto: 'Perguntas frequentes',
        url: '/faq',
    },
    {
        texto: 'Sobre',
        url: '/sobre',
    },
];

export default function Menu() {


    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>

            <MenuWrapper.CentralSide>
                {links.map(function (link) {
                    return (
                        <li key={link.url}>
                            <Text tag="a" variant="smallestException" href={link.url}>
                                {link.texto}
                            </Text>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>

            <MenuWrapper.RightSide>
                <Button type="button" ghost variant="secondary.main">Entrar</Button>
                <Button type="button" variant="primary.main">Cadastrar</Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}