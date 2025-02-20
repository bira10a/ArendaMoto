import styled, {keyframes} from "styled-components"
import {Section, Container} from '../styles/Global';
import mainBg from './mainBg.jpg';

import { Reserve } from "./reserve";

import { useState } from "react";


const FadeInAnimation = keyframes`
    0% {color: white; background: rgba(248, 35, 35, 0.2)}
    50% {color: #a53737; background: rgba(255, 255, 255, 0.2)}
    100% {color: white; background: rgba(248, 35, 35, 0.2)}
`;

const SectionBlock = styled(Section)`
    position: relative;

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
            font-family: "Pattaya", serif;
            font-size: 25px;
            padding: 20px;
            /* color: white; */
            margin-left: 10%;

            /* background: rgba(255, 255, 255, 0.2); */
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(3.3px);
            animation: ${FadeInAnimation} 5s linear infinite;
        }
    }
    `

const Main = () => {
    const [reserve, setReserve] = useState(false);

    const changeReserve = () => {
        setReserve(i => !i)
    }

    return (
        <SectionBlock style={{backgroundImage: `url(${mainBg})`}}>
            <Container>

                {/* <Reserve /> */}
                { reserve ? <Reserve /> : null }

                <h1>Прокат мопедов</h1>
                <div>Получите самые яркие эмоции и комфорт по самым выгодным ценам в Новороссийске</div>
                <button onClick={changeReserve}>Забронировать</button>
            </Container>
        </SectionBlock>
    )
}
export {Main}

// https://www.behance.net/gallery/179588321/dizajn-sajta-dlja-prokata-motociklov-Landing-page?ysclid=m72ym9ydt5695916431