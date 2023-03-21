import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://i.pinimg.com/originals/45/17/2b/45172b9276789d09b5fdd4a0c2524ef4.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mb-6"
          src="https://wikicity.kz/fotos/Company_26900_E5R3rbNFhCsK54dn150kYWoU.jpeg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="http://2.bp.blogspot.com/-D39m5SXB65I/VmQeGIUmrRI/AAAAAAAAe14/W-MPrEX7x9w/s1600/DSC04360.JPG"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://www.restaurantmagazine.com/wp-content/uploads/2021/07/Three-Ways-To-Make-Your-Restaurant-More-Energy-Efficient.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="http://bearburgers.ru/wp-content/uploads/2018/03/IMG_7416.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default UncontrolledExample;