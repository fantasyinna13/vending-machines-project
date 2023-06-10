import React, { useState } from 'react';
import { Card, Button, Modal, Col, Row, Container  } from 'react-bootstrap';
import coffee from '../assets/coffee.jpg';
import beans from '../assets/beans.jpg';
import wrench from '../assets/wrench.jpg';
import calculator1 from '../assets/calculator1.jpg';

const ArticlesCards = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
  
    const handleButtonClick1 = () => {
      setShowModal1(true);
    };
  
    const handleButtonClick2 = () => {
      setShowModal2(true);
    };
  
    const handleButtonClick3 = () => {
      setShowModal3(true);
    };
  
    const handleCloseModal1 = () => {
      setShowModal1(false);
    };
  
    const handleCloseModal2 = () => {
      setShowModal2(false);
    };
  
    const handleCloseModal3 = () => {
      setShowModal3(false);
    };
  return (
    <> 
      <Container className="d-flex flex-column align-items-center mt-4">
    <div className="card-container" >
    <Row className="justify-content-between">
      <Col  className="mb-4 d-flex">
      <Card className="w-100 h-100">
        <Card.Img variant="top" src={wrench} alt="wrench" />
        <Card.Body className="d-flex flex-column p-3">
          <Card.Title>Често срещани грешки</Card.Title>
          <Card.Text>
            Най-често срещаните грешки и какво означават...
          </Card.Text>
          <div className="d-flex justify-content-center align-items-center mt-auto">
          <Button variant="primary" onClick={handleButtonClick1}>
            Прочети още
          </Button>
          </div>
        </Card.Body>
      </Card>
      
      <Modal show={showModal1} onHide={handleCloseModal1} className='modal-xl' >
        <Modal.Header closeButton>
          <Modal.Title>Често срещани грешки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
         <p> Повреда на Air – Break <b>(guasto Air-break)</b> 
Машината блокира след направени 7 селекции и микропрекъсвача не сигнализира за липса
на вода.</p>
<p>
Повреда бойлер еспресо <b> (guasto caldaia espresso)</b>
След 10 минути от затоплянето, след включването на машината или от последната
селекция ,бойлера не постигне необходимата температура .</p>
<p>
Повреда бойлер инстант <b>  (guasto caldaia instant)</b>
След 20 минути от затоплянето, след включване на машината или от последната селекция,
бойлера на разтворимите не постигне необходимата температура.</p>
<p>
Повреда монетник <b> (guasto gettoniera)</b>
Машината блокира след като , валидатора няма комуникация с монетника 30 сек.</p>
<p>
Повреда данни RAM <b> (guasto dati RAM)</b>
Данните съдържащи се в EEeprom (чип , който запазва данните от калибрирането) са
сгрешени и трябва да бъдат заменени от Eprom,загубвайки всички статистични данни.</p>
<p>
Повреда липса вода <b>  (guasto vuoto acqua)</b>
Ако за една минута микропрекъсвача от air-break остане затворен;</p>
<p>
Повреда липса чаши <b> (guasto vuoto bicchieri)</b>
Микропрекъсвача се задейства ,когато мотора променя колоната.След една обиколка ако
микропрекъсвача не се затвори,устройството остава блокирано.
Машината блокира когато легенчето е пълно с отпадъчна течност.</p>
<p>
Повреда вентилатор <b> (guasto ventolina)</b>
Предизвикана от липсващо броене за макс.време от брояча;</p>
<p>
Повреда на групата кафе <b> (guasto gruppo caffe)</b>
Машината не се блокира , но се изключват селекциите на база кафе.</p>
<p>
Повреда липса кафе <b> (guasto vuoto caffe)</b>
След като за 15 сек., дозата кафе не се постигне,се изключват селекциите на базата кафе.</p>
<p>
Повреда отделяне кафе <b> (guasto sgancio caffe)</b>
След като бъде отделена смляната доза,микропрекъсвача на дозатора сигнализира наличието
на кафе в камерата на дозатора и се изключат селекциите на базата кафе.</p>
<p>
Повреда липса течност 1 и 2. <b> (guasto vuoto sciroppo 1 e 2)</b></p>
<p>
Повреда на подвижните дюзи. <b> (guasto ugelli mobili)</b></p>
<p>
Ако дюзите не достигнат точката на пускане,устройството се изключва.
Повреда липса на студена вода <b> (guasto vuoto acqua unita fredda)</b></p>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal1}>
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>
      </Col>

      <Col className="mb-4 d-flex">
      <Card className="w-100 h-100">
        <Card.Img variant="top" src={calculator1} alt="calculator" />
        <Card.Body className="d-flex flex-column p-3">
          <Card.Title>Какви са разходите свързани с поддръжката на вендинг кафе автомат?</Card.Title>
          <Card.Text>
            Ето какви разходи има всяка една вендинг машина...
          </Card.Text>
          <div className="d-flex justify-content-center align-items-center mt-auto">
          <Button variant="primary" onClick={handleButtonClick2}>
            Прочети още
          </Button>
          </div>
        </Card.Body>
      </Card>
      
      <Modal show={showModal2} onHide={handleCloseModal2} className='modal-xl'>
        <Modal.Header closeButton>
          <Modal.Title> Какви са разходите свързани с поддръжката на вендинг кафе автомат? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                <p> 
          <b>Поддръжката на вендинг кафе автомат е свързано и с доста разходи като например: </b>
          </p>
          <p> - Първоначални разходи по създаването на фирма (ако вече нямате такава).</p>
          <p> - Осигуровки на фирмата.</p>
          <p> - Тротоарно право, ток, наем.</p>
          <p> - Разходи за кафе и инстантни напитки.</p>
          <p> - Консумативи като бъркалки и чаши.</p>
          <p> - Годишен абонамент за касовия апарат.</p>
          <p> - Данъци и допълнителни такси.</p>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal2}>
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>
      </Col>

      <Col className="mb-4 d-flex">
      <Card  className="w-100 h-100">
        <Card.Img variant="top" src={beans} alt="beans" />
        <Card.Body className="d-flex flex-column p-3">
          <Card.Title>Програмиране на машината</Card.Title>
          <Card.Text>
            Програмиране на дози на водата и на разтворимите напитки, смяна на цени и др.
          </Card.Text>
          <div className="d-flex justify-content-center align-items-center mt-auto">
          <Button variant="primary" onClick={handleButtonClick3}>
            Прочети още
          </Button>
          </div>
        </Card.Body>
      </Card>
      
      <Modal show={showModal3} onHide={handleCloseModal3} className='modal-xl'>
        <Modal.Header closeButton>
          <Modal.Title>Програмиране на машината</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            <p> <b>
        Меню Programacione- Програмиране
            </b> </p>
            <p>
1.<b> Guasti attuali</b> – повреди
</p>
<p>
2.<b> Dosi acqua </b>– дози на водата
</p>
<p>
3. <b>Dosi polwre </b> – дози на разтворимите напитки
</p>
<p>
4. <b>Set prezzi </b>– настройка цени
</p>
<p>
5.<b>Set prezzi selecioni</b> – свържи цената с напитката
</p>
<p>
6.<b> Monete base PD </b>– базова монета / десетична точка
</p>
<p>
7. <b>Линии на валидатора </b>
</p>
<p>
8.<b> Инициализация</b>
</p>
</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Col>

</Row>
      </div>
      </Container>
    </>
  );
};

export default ArticlesCards;
