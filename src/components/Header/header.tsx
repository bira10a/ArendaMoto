import styled from 'styled-components';
import LogoMoto from './logo-moto.svg';
import {Container} from '../styles/Global';
import {NavLink} from 'react-router';



const HeaderBlock = styled.header`
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    z-index: 3;
`
const Containerblock = styled(Container)`
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 55px;
        font-family: "Pattaya", serif;

        ul {
            display: flex;
            gap: 55px;


            li {

                a {
                    display:inline-block;
                    transition: color 0.3s linear, opacity 0.3s linear, border-color 0.3s linear;
                    outline: transparent;
                    border-top: 3px solid transparent;
                    border-bottom: 3px solid transparent;

                    &.active {
                        transform: scale(1.3);
                        border-color: #ab73e7;
                        color: #ab73e7;
                    }

                    &:hover {
                        color: #ab73e7;
                    }

                    &:focus {
                        transform: scale(1.3);
                        border-color: #ab73e7;
                        color: #ab73e7;
                    }

                    &:active {
                        transform: scale(1.3);
                    }
                }
            }
        }

        img {
            width: 75px;
            height: 80px;
            display: block;
            mask: url(${LogoMoto}) center / cover no-repeat;
            background-color: #ffffff;
            transition: background-color 0.3s linear;

            &:hover {
                background-color: #8458B3;
            }
        }
    }
`

const Header = () => {
    return (
        <HeaderBlock>
            <Containerblock>
                <nav>
                    <ul>
                        <li><NavLink to="/">О нас</NavLink></li>
                        <li><NavLink to="/1">Цены</NavLink></li>
                        <li><NavLink to="/moto">Мотоциклы</NavLink></li>
                    </ul>
                    <img />
                    <ul>
                        <li><NavLink to="/asd">Условия</NavLink></li>
                        <li><NavLink to="/ads">Оплата</NavLink></li>
                        <li><NavLink to="/31">Контакты</NavLink></li>
                    </ul>
                </nav>               
            </Containerblock>
        </HeaderBlock>
    )
}
export {Header}