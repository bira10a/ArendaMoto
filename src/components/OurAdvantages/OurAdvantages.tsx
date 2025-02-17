import styled from 'styled-components';
import {Section, Container} from '../styles/Global';
import BgImg from './moto1.jpg';
import Scooter from './Scooter.svg';


// const images = [
//     { src: 'http://placehold.it/100x100/76BD22', alt: 'Your description here 1' }, 
//     { src: 'http://placehold.it/100x100/76BD23', alt: 'Your description here 2' }
//   ];
  
//   // ...
  
//   {images.map(function(imageProps) {
//     return (
//       <li key={ imageProps.src }>
//         <img src={ imageProps.src } alt={ imageProps.alt } />
//       </li>
//     );
//   })}


//   <ul className="product-gallery-thumbs__list">
//    {images.map(function(image, imageIndex){
//       return <img key={ imageIndex } src={ image } />
//    })}
// </ul>



const ContainerBlock = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100dvh;
`

const FlexList = styled.ul`
   width: 30%;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   gap: 60px;

   img {
    svg {
        fill: white;
        stroke: white;

    }
   }
`

const Items = styled.li`
    max-width: 350px;
    width: 100%;
    text-align: end;
    

    & > p ~ p {
        opacity: 0.7;
    }

    &.textLeft {
        text-align: start;
    }
   
`

const ItemsRevers = styled(Items)`
    text-align: start;

    &.textRight {
        text-align: end;
    }
`

const OurAdvantages = () => {
    return (
        <Section style={{backgroundImage: `url(${BgImg})`}}>
            <ContainerBlock>
                <FlexList>
                    <Items>
                        <p>Шлем и перчатки бесплатно</p>
                        <p>Вся необходимая экипировка предоставляется Вам бесплатно.</p>
                        <img src={Scooter} alt="" />
                    </Items>
                    <Items className='textLeft'>
                        <p>Удобная оплата</p>
                        <p>Мы принимаем наличные, карты и любые переводы.</p>
                        <img src="" alt="" />
                    </Items>
                    <Items>
                        <p>Скидки и акции</p>
                        <p>Даём скидку 5 % тем, кто подписан на нас в Instagram, Telegram.</p>
                        <img src="" alt="" />
                    </Items>
                </FlexList>
                <FlexList>
                    <ItemsRevers>
                        <p>Минимальный залог</p>
                        <p>Мы не требуем оставлять "космические" залоги, для того, чтобы насладится катанием на наших мопедах.</p>
                        <img src="" alt="" />
                    </ItemsRevers>
                    <ItemsRevers className='textRight'>
                        <p>Широкий выбор</p>
                        <p>Мы предоставляем широкий выбор мопедов раззной мощности.</p>
                        <img src="" alt="" />
                    </ItemsRevers>
                    <ItemsRevers>
                        <p>бесплатные балаклавы</p>
                        <p>Всегда чистые балаклавы в наличии. Мы заботимся о Вас.</p>
                        <img src="" alt="" />
                    </ItemsRevers>                    
                </FlexList>
            </ContainerBlock>
        </Section>
    )
}
export {OurAdvantages}