import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import banner1 from '../Images/banner1.JPG';
import banner2 from '../Images/banner2.JPG';
import banner3 from '../Images/banner3.JPG';
import banner4 from '../Images/banner4.JPG';
import './ImageSlider.css';
// import SimpleImageSlider from "react-simple-image-slider"; //code 4
// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import useResizeObserver from "use-resize-observer";


export default function ImageSlider() {

    //Code 1, 3 & 4
    const sliderImages = [banner1,
                          banner2,
                          banner3,
                          banner4];
    //Code 1, 3 & 4 END
 
    // Code 1
    // const arrayDataItems = sliderImages.map((sliderImage) => <li>{sliderImage}</li>);
    // Code 1 END



    //Code 2
    // const [Image, setImage] = useState(0)
    // const [AllImage, setAllImage] = useState([Banner1, Banner, Banner2, Banner3])
    // useEffect(() => {
    //     setInterval(() => {
    //         setImage(Image => Image < 3 ?  Image + 1 : 0 )
    //      }, 6000)
    // }, [])
    //Code 2 END

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

     {/* code 4 simple image slider */}
        {/* <div className='imagediv'>
            <SimpleImageSlider 
            width={'100%'}
            height={'100%'} 
            maxheight={'45vw'}
            images={sliderImages} 
            showNavs={true} 
            autoPlayDelay={3} 
            autoPlay={3} 
            style={{ objectfit: 'cover' }} 
            />
        </div> */}
        {/* code 4 simple image slider END */}





        {/* Code 1 */}
        {/* <ul>{arrayDataItems}</ul> */}
        {/* Code 1 END*/}




        {/* //Code 2 */}
        {/*
        <div className='imagediv'>
        <img  src={AllImage[Image]} alt='Image Error' className='imageslider'/>
        <div className='PNB'>
        <button onClick={() => {if(Image >= 0)setImage(Image - 1)}} className='lt'>&lt;</button>
        <button onClick={() => {if(Image <= AllImage.length - 1)setImage(Image + 1)}} className='gt'>&gt;</button>
        </div>
        </div>
         */}
          {/* //Code 2 END*/}





        {/* <div > //local image set path
            <img src={Banner} alt="banner" className='banner1' />
        </div> */}

    </>
  );
}
