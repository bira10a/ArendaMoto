import styled from 'styled-components';
import {Section, Container} from '../styles/Global';
import BgImg from './moto1.jpg';


interface TypeCartImages {
    src: string,
    alt: string,
    title: string,
    text: string,
    id: number
}


const ContainerBlock = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100dvh;
    padding-top: 50px;
    padding-bottom: 50px;
    overflow: hidden;

    h2 {
        font-family: "Marck Script", serif;
        font-size: 50px;
        margin-bottom: 30px;
    }
`

const FlexList = styled.ul`
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 25px;
    visibility: hidden;

    & li:hover {
        transform: scale(1.2);
    }

    &:hover > :not(:hover) {
        /* filter: blur(10px); */
        opacity: 0.4;
        transform: scale(0.9);
    }
`

const Items = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
    text-align: center;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.3px);
    transition: all 0.3s linear;
    visibility: visible;
 
    & > p ~ p {
        opacity: 0.8;
    }
   
`

const OurAdvantages = () => {

    const images: TypeCartImages[] = [
        { src: '/src/components/OurAdvantages/Helmet.svg', alt: 'Helmet', title: 'Шлем и перчатки бесплатно', text: 'Вся необходимая экипировка предоставляется Вам бесплатно', id: Math.random() }, 

        { src: '/src/components/OurAdvantages/Money.svg', alt: 'Money', title: 'Удобная оплата', text: 'Мы принимаем наличные, карты и любые переводы.', id: Math.random() }, 

        { src: '/src/components/OurAdvantages/Sale.svg', alt: 'Sale', title: 'Скидки и акции', text: 'Даём скидку 5 % тем, кто подписан на нас в Instagram, Telegram.', id: Math.random() },

        { src: '/src/components/OurAdvantages/Deposit.svg', alt: 'Deposit', title: 'Минимальный залог', text: 'Мы не требуем оставлять "космические" залоги, для того, чтобы насладится катанием на наших мопедах.', id: Math.random() }, 

        { src: '/src/components/OurAdvantages/Scooter.svg', alt: 'Scooter', title: 'Широкий выбор', text: 'Даём скидку 5 % тем, кто подписан на нас в Instagram, Telegram.',id: Math.random() }, 

        { src: '/src/components/OurAdvantages/Balaclava.svg', alt: 'Balaclava', title: 'Бесплатные балаклавы', text: 'Всегда чистые балаклавы в наличии. Мы заботимся о Вас.', id: Math.random() }
      ];

  
    return (
        <Section style={{backgroundImage: `url(${BgImg})`, backgroundAttachment: 'fixed'}}>
            <ContainerBlock>
                <h2>Наши преимущества</h2>
                <FlexList>
                    {
                        images.map(i => {
                            return (
                                <Items key={i.id}>
                                    <img src={i.src} alt={i.alt} width='75' height='55' />
                                    <p>{i.title}</p>
                                    <p>{i.text}</p>
                                </Items>
                            )
                        })
                    }
                </FlexList>
            </ContainerBlock>
        </Section>
    )
}
export {OurAdvantages}