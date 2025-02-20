import {Section, Container} from '../styles/Global';
import styled, {keyframes} from 'styled-components';

const add = keyframes`
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }

`

const ContainerBlock = styled(Container)`
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${add} 1s linear;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 20px;

    color: #ab73e7;

    input {
        border: 3px solid #ab73e7;
        border-radius: 10px;
        padding: 5px 10px;
    }
`

const Reserve = () => {
    return (
        <ContainerBlock>
            <h2>Аренда Мопеда</h2>
            <p>Можете связаться с нами</p>
            <nav>
                <ul>
                    <li><a href="tel:89930415610">+7 993 041-56-10</a></li>
                    <li><a href="mailto: bira10a@yandex.ru">bira10a@yandex.ru</a></li>
                    <li><a href="tel:89930415610">+7 993 041-56-10</a></li>
                </ul>
            </nav>
            <p>Или оставьте заявку и мы Вам перезвоним</p>
            <Form>
                <label htmlFor='nameForm'>Имя</label>
                <input type="text" id='nameForm' name='nameForm' />
                <label htmlFor='telForm'>Телефон</label>
                <input type="tel" id='telForm' name='telForm' />
                <button>Отправить данные</button>
            </Form>
        </ContainerBlock>
    )
}

export {Reserve};