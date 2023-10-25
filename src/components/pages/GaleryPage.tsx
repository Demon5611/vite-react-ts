import React, { useState } from 'react';
import { Card, Container, Modal } from 'react-bootstrap';
import ModalImage from 'react-modal-image';

type ImageData = {
  id: number;
  src: string;
  title: string;
  description: string;
}

export default function GaleryPage(): JSX.Element {
  const imagesData: ImageData[] = [
    {
      id: 1,
      src: '/src/resours/img/interior.jpg',
      title: 'Картинка 1',
      description: 'Описание изображения 1',
    },
    {
      id: 2,
      src: '/src/resours/img/interior.jpg',
      title: 'Картинка 2',
      description: 'Описание изображения 2',
    },
    {
      id: 3,
      src: '/src/resours/img/interior.jpg',
      title: 'Картинка 3',
      description: 'Описание изображения 3',
    },
    {
      id: 4,
      src: '/src/resours/img/interior.jpg',
      title: 'Картинка 4',
      description: 'Описание изображения 4',
    },
    {
      id: 5,
      src: '/src/resours/img/interior.jpg',
      title: 'Картинка 5',
      description: 'Описание изображения 5',
    },
    {
      id: 6,
      src: '/src/resours/img/interior.jpg',
      title: 'Картинка 6',
      description: 'Описание изображения 6',
    },
  ];
  
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <p />
        <Container className="containerTextGalary">
          <h2>Кто мы такие и куда направляемся?</h2>
          <p>
            Этот вопрос не раз ставил меня в тупик, потому что я родитель, и в то же время, обладаю
            любопытством ребенка, выросшего в семье ученых. Скажем по-другому. Для меня это второй
            вопрос после "Есть ли Господь?" Я думаю, что ответ уже ясен из заглавной буквы слова
            "Господь". Но как насчет остального? <br />Я начал искать всевозможную информацию,
            одновременно растягивая мышцы, предназначенные для того, чтобы дать моему телу быстрый
            старт. А началось все со сказки, вернее, с романа Олдоса Хаксли "О дивный новый мир!"
            (1937). Следующим в моем списке чтения было "Возвращение в дивный новый мир" (1958).
            Сказать, что этот человек многое предвидел, значит ничего не сказать... Он был самым
            умным и образованным человеком в интеллектуальных научных кругах Великобритании (спасибо
            google). Именно благодаря его работам я узнал о созвездии социологов, занимающихся
            вопросами роста населения. Вот лишь некоторые из них, чьи работы еще не были сожжены на
            костре демократических свобод. Кто мы такие и куда направляемся?
          </p>
        </Container>
      </Container>

      <Container className="cardContainer">
        {imagesData.map((image, index) => (
          <Card key={image.id || index} onClick={() => openModal(image.src)}>
            <Card.Img variant="top" src={image.src} />
            <Card.Body>
              <Card.Title>{image.title}</Card.Title>
              <Card.Text>{image.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>

      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body>
          <ModalImage large={selectedImage} alt="Selected Image" hideDownload />
        </Modal.Body>
      </Modal>
    </>
  );
}
