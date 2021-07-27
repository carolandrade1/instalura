import React from 'react';
import Logo from '../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';


export default function Menu() {

    const links = [
        {
            texto: 'Home',
            url: '/',
        },
        {
            texto: 'Perguntas Frequentes',
            url: '/faq',
        },
        {
            texto: 'Sobre',
            url: '/sobre',
        },
    ];

    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>

            <MenuWrapper.CentralSide>
                {links.map(function (link) {
                    return (
                        <li key={link.url}>
                            <a href={link.url}>
                                {link.texto}
                            </a>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>

            <MenuWrapper.RightSide>
                <button>Entrar</button>
                <button>Cadastrar</button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}