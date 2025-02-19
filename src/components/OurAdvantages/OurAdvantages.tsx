import styled from 'styled-components';
import {Section, Container} from '../styles/Global';
import BgImg from './moto1.jpg';
// import Scooter from './Scooter-W.svg';
import Scooter from './Scooter.svg';

interface TypeCartImages {
    src: string,
    alt: string,
    title: string,
    text: string
}



const ContainerBlock = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100dvh;
    padding-top: 50px;

    h2 {
        font-family: "Marck Script", serif;
        font-size: 50px;
        margin-bottom: 30px;
    }
`

const FlexList = styled.ul`
   width: 35%;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   gap: 60px;
`

const Items = styled.li`
    display: grid;
    align-items: center;
    column-gap: 10px;
    text-align: end;
    
    & > p ~ p {
        opacity: 0.7;
        grid-row: 2;
    }

    &.LeftItems:nth-child(2) {
        text-align: start;
    }

    img {
        grid-column: 3;
        grid-row: 1 / 3;
        width: 75px;
        height: 55px;
    }
   
`

const ItemsRevers = styled(Items)`
    text-align: start;

    &.textRight {
        text-align: end;
    }
`

const OurAdvantages = () => {

    const images: TypeCartImages[] = [
        { src: '/src/components/OurAdvantages/Helmet.svg', alt: 'Helmet', title: 'Шлем и перчатки бесплатно', text: 'Вся необходимая экипировка предоставляется Вам бесплатно' }, 

        { src: '/src/components/OurAdvantages/Money.svg', alt: 'Money', title: 'Удобная оплата', text: 'Мы принимаем наличные, карты и любые переводы.' }, 

        { src: '/src/components/OurAdvantages/Sale.svg', alt: 'Sale', title: 'Скидки и акции', text: 'Даём скидку 5 % тем, кто подписан на нас в Instagram, Telegram.' },

        { src: '/src/components/OurAdvantages/Deposit.svg', alt: 'Deposit', title: 'Минимальный залог', text: 'Мы не требуем оставлять "космические" залоги, для того, чтобы насладится катанием на наших мопедах.' }, 

        { src: '/src/components/OurAdvantages/Scooter.svg', alt: 'Scooter', title: 'Широкий выбор', text: 'Даём скидку 5 % тем, кто подписан на нас в Instagram, Telegram.' }, 

        { src: '/src/components/OurAdvantages/Balaclava.svg', alt: 'Balaclava', title: 'Бесплатные балаклавы', text: 'Всегда чистые балаклавы в наличии. Мы заботимся о Вас.' }
      ];

    // const imagesRight: TypeCartImages[] = [
    //     { src: '/src/components/OurAdvantages/Deposit.svg', alt: 'Deposit', title: 'Минимальный залог', text: 'Мы не требуем оставлять "космические" залоги, для того, чтобы насладится катанием на наших мопедах.' }, 

    //     { src: '/src/components/OurAdvantages/Scooter.svg', alt: 'Scooter', title: 'Широкий выбор', text: 'Даём скидку 5 % тем, кто подписан на нас в Instagram, Telegram.' }, 

    //     { src: '/src/components/OurAdvantages/Balaclava.svg', alt: 'Balaclava', title: 'Бесплатные балаклавы', text: 'Всегда чистые балаклавы в наличии. Мы заботимся о Вас.' }
    //   ];
  
    return (
        <Section style={{backgroundImage: `url(${BgImg})`, backgroundAttachment: 'fixed'}}>
            <ContainerBlock>
                <h2>Наши преимущества</h2>
                <FlexList>
                    {
                        images.map(i => {
                            return (
                                <Items>
                                    <p>{i.title}</p>
                                    <p>{i.text}</p>
                                    <img src={i.src} alt={i.alt} width='75' height='55' />
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