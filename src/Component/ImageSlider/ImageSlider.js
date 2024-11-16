import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import banner1 from '../Images/banner1.JPG';
import banner2 from '../Images/banner2.JPG';
import banner3 from '../Images/banner3.JPG';
import banner4 from '../Images/banner4.JPG';
import './ImageSlider.css';


export default function ImageSlider() {

    const sliderImages = [banner1,
                          banner2,
                          banner3,
                          banner4];
  
  return (
    <>
      <div className='imagediv'>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2000} // Auto play delay in milliseconds
          showArrows={true} // Show navigation arrows
          showThumbs={false} // Hide thumbnail navigation
          stopOnHover={true} // Stop auto play on hover
          >
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={"BannerError ${index + 1}"} />
            </div>
          ))}
        </Carousel>
      </div>

    </>
  );
}
