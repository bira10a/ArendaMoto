import styled from "styled-components"
import {Section, Container} from '../styles/Global';
import mainBg from './mainBg.jpg';

const SectionBlock = styled(Section)`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    /* &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: #f7f7f7d4;
    } */

    & > div {
        height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 35px;
        font-size: 55px;
        font-family: "Marck Script", serif;

        div {
            max-width: 500px;
            width: 100%;
            font-size: 20px;
            padding: 20px;
            text-align: center;
            font-family: "Gentium Book Plus", serif;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(3.3px);
        }

        button {
            font-family: "Gentium Book Plus", serif;
            font-size: 25px;
            padding: 20px;
            color: white;
            margin-left: 10%;

            background: rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(3.3px);
        }
    }
`

const Main = () => {
    return (
        <SectionBlock style={{backgroundImage: `url(${mainBg})`}}>
            <Container>
                <h1>Прокат мопедов</h1>
                <div>Получите самые яркие эмоции и комфорт по самым выгодным ценам в Новороссийске</div>
                <button>Забронировать</button>
            </Container>
        </SectionBlock>
    )
}
export {Main}