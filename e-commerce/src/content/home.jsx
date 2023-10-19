import Carousel from 'react-bootstrap/Carousel';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';


function DarkVariantExample() {
  return (
    <>
      <Carousel data-bs-theme="dark" className='img-carousel'>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src="/img/carousel-1.png"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src="/img/carousel-2.png"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src="/img/carousel-3.png"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      <br />
      <div className='row mx-auto my-auto align-items-center justify-content-center'>
        <div className='col-4 '>
          <div className='card'>
            <img src='img/home-shirt.png' />
            <div className='caption'>
              <b>PAKAIAN TERKINI </b> <br></br>
              Tersedia berbagai pakaian dari semua rentang usia
            </div>
          </div>

        </div>
        <div className='col-4 ms-5'>
          <div className='card'>
            <img src='img/home-pants.png' />
            <div className='caption'>
              <b>CELANA STYLISH </b> <br></br>
              Tersedia berbagai celana dari semua rentang usia
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className='row mx-auto my-auto align-items-center justify-content-center'>
        <div className='col-4 '>
          <div className='card'>
            <img src='img/home-shoes.png' />
            <div className='caption'>
              <b>SEPATU TRENDY </b> <br></br>
              Tersedia berbagai celana dari semua rentang usia
            </div>
          </div>

        </div>
        <div className='col-4 ms-5'>
          <div className='card'>
            <img src='img/home-watch.png' />
            <div className='caption'>
              <b>AKSESORIS MEMUKAU </b> <br></br>
              Tersedia berbagai celana dari semua rentang usia
            </div>
          </div>
        </div>
        <div className='col-10'>

          <br /><br />
         
          <br />
          <div className='lorem'>
          <center><h6><b>MENGAPA HARUS T-SHOP</b></h6></center>
            <LoremIpsum p={3} />
          </div>
        </div>

        <div className='col-10'>

          <br /><br />
        
          <br />
          <div className='lorem'>
          <center><h6><b>MENGAPA HARUS T-SHOP</b></h6></center>
            <LoremIpsum p={4} />
          </div>
        </div>
        <div className='col-12'>
          <br /><br />

        </div>

      </div>
    </>
  );
}

export default DarkVariantExample;