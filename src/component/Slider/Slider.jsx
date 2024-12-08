import React from 'react';

const Slider = () => {
    return (
        <div>
              <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/YfrhNbP/modern-sport-composition-with-gym-elements.jpg"
      className="w-full h-[600px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <h2 className='text-4xl text-white'>Sports Store & Equipment Shop</h2>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/dt0Gv1D/Sport-equipment-cartoon-vector-set.jpg"
      className="w-full h-[600px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <div>
      <h2 className='text-4xl'>Professional sports products</h2>
      <p>We specialize in a variety of professional sports products.</p>
      </div>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/vJWnF2c/still-life-sport-arrangement.jpg"
      className="w-full h-[600px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <div>
        <h1 className='text-4xl text-center'>Trending now</h1>
        <h2>Discover what's rising to the top in the world of fashion, technology, and culture</h2>
      </div>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/fknkFyy/top-view-composition-with-neatly-arranged-organized-sport-items.jpg"
      className="w-full h-[600px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <div>
        <h2 className='text-4xl'>Sports Clothing & Fitness Equipment</h2>
        <p className='text-center'>Customize each product variations individually. Set the most appropriate <br />
        zoom effect, page structure, sidebar position etc.</p>
      </div>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
        </div>

        </div>
    );
};

export default Slider;