import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import monky1 from '../../resours/img/monky1.jpeg';
import monky2 from '../../resours/img/monky2.jpg';
import ImgHeader from '../ui/ImgHeader';
import CV from '../../resours/img/CV.pdf'

export default function MainPage(): JSX.Element {
  return (
  
    <Container >
      <p/>
      <ImgHeader/>
      <p/>
      <Container className='containerText'>
        <p className='firstText'>
          Родилась, живу и работаю в космическом сердце России- городе Королёв, Московская область.
          С 2021 года позволила себе быть тем, кем я есть на самом деле – Социальным Художником.
        </p>
        <div className='textAround1'>
          Двигаясь по жизненному пути к творческому началу, я всегда хотела освещать острые
          социальные проблемы не хуже журналиста, вкладывая в свои работы простой и понятный замысел
          понятный каждому зрителю в контексте реального времени. На меня сильно повлияли работы
          Banksy - они для меня являются идеальным вариантом совмещения творчества и социальных
          проблем общества. Они работают как фары машин, существенно повышая шансы людей на движение
          в выбранном направлении. Познакомиться лично с Banksy – моя мечта, такая же невероятная,
          как и его личность.
        </div>

      
        <Col  md={12} className="text-end">
          <Image className='img2' src={monky1} />
        </Col>
    

        <p>
          Создаю свои работы с хорошей проработкой тоновых решений: с четким контрастом черного и
          белого. Цвет лишь усиливает значение одного или другого тона: помогает рефлексировать
          через призму восприятий отраженной в мозгу картинки, вызывая нужный эмоциональный оттенок.
          В создании своих работ использую смешанные техники: коллаж, акриловые и масляные краски,
          аэрозоль, маркеры, буквы и сакральные символы, дополнительные элементы и все то, что
          позволит зрителю наиболее полно взаимодействовать с каждым созданным изображением. Я
          обожаю расставлять акценты в работах сознательно усиливая основную мысль произведения.
        </p>
        <h2>Кто мы такие и куда направляемся?</h2>
        <p>Этот вопрос не раз ставил меня в тупик, потому что я родитель, и в то же время, обладаю любопытством ребенка, выросшего в семье ученых. Скажем по-другому. Для меня это второй вопрос после "Есть ли Господь?" Я думаю, что ответ уже ясен из заглавной буквы слова "Господь". Но как насчет остального? <br/>
          Я начал искать всевозможную информацию, одновременно растягивая мышцы, предназначенные для того, чтобы дать моему телу быстрый старт. А началось все со сказки, вернее, с романа Олдоса Хаксли "О дивный новый мир!" (1937). Следующим в моем списке чтения было "Возвращение в дивный новый мир" (1958). Сказать, что этот человек многое предвидел, значит ничего не сказать... Он был самым умным и образованным человеком в интеллектуальных научных кругах Великобритании (спасибо google). Именно благодаря его работам я узнал о созвездии социологов, занимающихся вопросами роста населения. Вот лишь некоторые из них, чьи работы еще не были сожжены на костре демократических свобод. Кто мы такие и куда направляемся?
          <br />
        </p>
        <Col  md={12} className="text-start">
          <Image className='img3' src={monky2} />
        </Col>
        <p>
        Эрих Фромм (1900-1980) - немецкий социолог, философ, социальный психолог и неофрейдист. Он отчасти противопоставил свою философию хваленому Фрейду (в то же время хваленому Э. Бернейсом, его племянником и просто великим "продавцом" своего времени). Фромм стремился сместить акцент с биологических мотивов человеческого поведения в психоанализе на социальные факторы. Чтобы показать, что человеческая природа - человеческие страсти и тревоги - являются продуктом культуры. Фромм исследовал сложную ситуацию, в которой оказывается человек в западной культуре, где стремление к индивидуальности приводит к одиночеству, ощущению своего ничтожества и бессилия
          Как вам такой поворот в рассужденях "дикого" запада?
        </p>
        <a href={CV} className='cv' download="CV.pdf">Скачать CV.pdf</a>
      </Container>
    </Container>
  );
}