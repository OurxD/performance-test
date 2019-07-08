import React from 'react';
import PerformantImage from './PerformantImage';

const imageSizes = [1360];

const Hero = () => (
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <PerformantImage
          alt="First slide"
          className="d-block w-100"
          source="https://i5.wal.co/dfw/4ff9c6c9-cc0f/k2-_2add2578-1f56-46f5-b4cf-23918338b919.v1.jpg-b3adfa4bd51eea13f8a387c533d57254b7bcd7fc-optim-1360x410.jpg"
          sizes={imageSizes}
        />
      </div>
      <div className="carousel-item">
        <PerformantImage
          alt="Second slide"
          className="d-block w-100"
          source="https://i5.walmartimages.com/dfw/4ff9c6c9-f5c9/k2-_181600aa-2d16-48bc-9c9a-47aa76a097de.v1.jpg?odnWidth=1360&odnHeight=410&odnBg=ffffff"
          sizes={imageSizes}
        />
      </div>
      <div className="carousel-item">
        <PerformantImage
          alt="Third slide"
          className="d-block w-100"
          source="https://i5.wal.co/dfw/4ff9c6c9-3ea0/k2-_d792b602-3cee-46de-a202-44b28ca62301.v1.jpg-b71dbf14cb3ce14ed8d3d5d07966cf4f2da8f7f5-optim-1360x410.jpg"
          sizes={imageSizes}
        />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Hero;
