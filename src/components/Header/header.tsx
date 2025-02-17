import styled from 'styled-components';
// import LogoMoto from './logo-moto-white.png';
import LogoMoto from './logo-moto.svg';
import {Container} from '../styles/Global';



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

                    &::after {
                        content: '';
                        display: block;
                        border-bottom: solid 3px #ab73e7;  
                        transform: scaleX(0);  
                        transition: transform 0.3s ease-in-out;
                        transform-origin:100% 50%;
                    }

                    &:hover {
                        color: #ab73e7;

                        &::after {
                            transform: scaleX(1);
                            transform-origin: 0 50%;
                        }
                    }

                    &:focus {
                        transform: scale(1.3);
                        border-color: #ab73e7;
                        color: #ab73e7
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
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Цены</a></li>
                        <li><a href="#">Мотоциклы</a></li>
                    </ul>
                    <img />
                    <ul>
                        <li><a href="#">Условия</a></li>
                        <li><a href="#">Оплата</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>               
            </Containerblock>
        </HeaderBlock>
    )
}
export {Header}