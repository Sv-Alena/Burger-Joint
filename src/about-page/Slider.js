import slide61 from './imgSlider/slide61.jpg'
import slide51 from './imgSlider/slide51.jpg'
import slide91 from './imgSlider/slide91.jpg'
import slide4 from './imgSlider/slide4.JPG'
import slide31 from './imgSlider/slide31.jpg'
import slide81 from './imgSlider/slide81.jpg'
import slide1  from './imgSlider/slide1.jpg'
import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"

function DarkVariantExample() {
  return (
    <Carousel carousel-indicators active>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src= {slide1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide51}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide91}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide31}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src={slide81}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide61}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;